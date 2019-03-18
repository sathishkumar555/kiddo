
const sum =(a,b) => a + b;
const mul =(a,b) => a*b;

const generateGreeting = (name) => `Hello ${name}`;

test("should add two numbers",()=>{
    const result= sum(3,4);
    if(result !== 7){
        throw new Error(`added 4 and 3 .The result was ${result} expected 7`);
    }
})

test("should multiply two  number",()=>{
    const result= mul(3,4);
    expect(result).toBe(12);
})

test("should generate a greeting",()=>{
    const greeting= generateGreeting("sathish");
    expect(greeting).toBe("Hello sathish")
})