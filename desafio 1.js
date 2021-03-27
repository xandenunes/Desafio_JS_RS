function TrocaNotas(nota) { // função para trocar a notas inserindo uma por uma
    if (nota >= 90) {
        nota = "A";
    }
    else if (nota >= 80) {
        nota = "B";
    }
        else if (nota >= 70) {
            nota = "C";
        }
            else if (nota >= 60) {
                nota = "D";
            }
                else{
                    nota = "F";
                }
return nota
}
function TesteNotas () { // função para testar a função Troca Notas
    for (let index = 100; index >= 50; index--) {
        console.log(TrocaNotas(index));
        
    }
}
TesteNotas();

function TrocaNotasArrays(Array) { // função para trocar a notas inserindo um array
    for (let index = 0; index < Array.length; index++){
        if (Array[index] >= 90) {
            Array[index] = "A";
        }
        else if (Array[index] >= 80) {
           Array[index]= "B";
        }
            else if (Array[index] >= 70) {
                Array[index] = "C";
            }
                else if (Array[index] >= 60) {
                    Array[index] = "D";
                }
                    else{
                        Array[index] = "F";
                    }
    
    }
return Array
}
notas=[
    50,51,52,53,54,55,56,57,58,59,
    60,61,62,63,64,65,66,67,68,69,
    70,71,72,73,74,75,76,77,78,79,
    80,81,82,83,84,85,86,87,88,89,
    90,91,92,93,94,95,96,97,98,99,100,
   ];
console.log(TrocaNotasArrays(notas))