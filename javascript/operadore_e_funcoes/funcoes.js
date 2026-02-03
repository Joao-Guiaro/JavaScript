function saudacao(){
    console.log("Olá, JavaScript!");
}

function saudacao2(nome){
    console.log("Olá, "+ nome);
}

function somar(a, b){
    return a + b;
}

saudacao();
saudacao2("João");
console.log(somar(2, 3));

function imc(peso, altura){
    console.log("Seu IMC é",peso/(altura**2));
}

function parimpar(x){
    if (x%2 == 0){
        console.log("O número",x,"é par");
    }else{
         console.log("O número",x,"é impar");
    }
}

imc(64.5, 1.75);
parimpar(100);