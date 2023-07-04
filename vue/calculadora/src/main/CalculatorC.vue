<template>
    <div class="calculator">
        <DisplayD :value="displayValue" />
        <ButtonB label="AC" triple @onCalcButtonClick="clearMemory" />
        <ButtonB label="/" operation @onCalcButtonClick="setOperation" />
        <ButtonB label="7" @onCalcButtonClick="addDigit" />
        <ButtonB label="8" @onCalcButtonClick="addDigit" />
        <ButtonB label="9" @onCalcButtonClick="addDigit" />
        <ButtonB label="*" operation @onCalcButtonClick="setOperation" />
        <ButtonB label="4" @onCalcButtonClick="addDigit" />
        <ButtonB label="5" @onCalcButtonClick="addDigit" />
        <ButtonB label="6" @onCalcButtonClick="addDigit" />
        <ButtonB label="-" operation @onCalcButtonClick="setOperation" />
        <ButtonB label="1" @onCalcButtonClick="addDigit" />
        <ButtonB label="2" @onCalcButtonClick="addDigit" />
        <ButtonB label="3" @onCalcButtonClick="addDigit" />
        <ButtonB label="+" operation @onCalcButtonClick="setOperation" />
        <ButtonB label="0" double @onCalcButtonClick="addDigit" />
        <ButtonB label="." @onCalcButtonClick="addDigit" />
        <ButtonB label="=" operation @onCalcButtonClick="setOperation" />

    </div>
</template>

<script>
import DisplayD from '../components/DisplayD.vue'
import ButtonB from '../components/ButtonB.vue'

export default {
    // Por ser um componente, data tem que ser uma função
    data: function() {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0,
        }
    },
    components: { DisplayD, ButtonB }, // precisa referenciar os componentes importados aqui
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data()) // Pega os valores iniciais do objeto data e atribui nele.
        },
        setOperation(operation) {
            if (this.current === 0) {
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = operation === "="
                const currentOperation = this.operation

                try {
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    )
                    if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
                        this.clearMemory()
                        return
                    }
                } catch (e) {
                    this.$emit('onError', e)
                } 

                this.values[1] = 0

                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals
            }
        },
        addDigit(n) {
            if (n === '.' && this.displayValue.includes('.')) {
                return
            }
            
            // displayValue é uma constante dentro da função addDigit
            // this.displayValue é o valor em data
            const clearDisplay = this.displayValue === '0'
                || this.clearDisplay

            const currentValue = clearDisplay ? '' : this.displayValue

            const displayValue = currentValue + n

            this.displayValue = displayValue

            this.clearDisplay = false 

            if (n !== '.') {
                const i = this.current
                const newValue = parseFloat(displayValue)
                this.values[i] = newValue
            }
        }
    }
}
</script>

<style lang="scss">
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}

</style>