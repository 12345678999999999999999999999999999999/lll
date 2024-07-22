class Calculator{
    constructor(num){
        this.calcNum = num
        this.num1 = `num1-${num}`
        this.num2 = `num2-${num}`
        this.operator = `operator-${num}`
        this.result = `result-${num}` 
    }
    getLayout = ()=> {
        let container = document.createElement('div')
        let num1 = document.createElement('input')
        num1.value=2
        num1.id=this.num1
        
        let operator = document.createElement('input')
        operator.value="+"
        operator.id=this.operator
        
        let num2 = document.createElement('input')
        num2.value=2
        num2.id=this.num2

        let btnEl = document.createElement('button')
        btnEl.innerHTML = 'solve'
        btnEl.addEventListener('click',this.solve)

        let result = document.createElement('span')
        result.id = this.result

        container.append(num1)
        container.append(operator)
        container.append(num2)
        container.append(btnEl)
        container.append(result)

        document.body.append(container)
    }
    solve =()=> {
        let operator = document.getElementById(this.operator)
        let num1 = document.getElementById(this.num1)
        let num2 = document.getElementById(this.num2)
        let result = document.getElementById(this.result)

        switch(operator.value){
            case "+":
                result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
                break;
            case "-":
                result.innerHTML = parseInt(num1.value) - parseInt(num2.value);
                break;
            case "*":
                result.innerHTML = parseInt(num1.value) * parseInt(num2.value);
                break;
            case "/":
                result.innerHTML = parseInt(num1.value) / parseInt(num2.value);
                break;
            default:
                break;

        }
    }
}

const calc1 = new Calculator(1)
calc1.getLayout()

const calc2 = new Calculator(2)
calc2.getLayout()

const calc3 = new Calculator(3)
calc3.getLayout()