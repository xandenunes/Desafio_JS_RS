const LivroPorCategoria = [
    {
        categoria:"Riqueza",
        livros:[
            {
                titulo: "Os segredos da mente milionaria",
                autor:"T.Harv Eker",
            },
            {
                titulo: "O homem mais rico da Babilônia",
                autor: "George S. Clason",
            },
            {
                titulo: "Pai rico, pai pobre",
                autor:"Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        categoria:"Inteligencia emocional",
        livros:[
            {
                titulo: "Você é insubstituivel",
                autor:"Augusto Cury",
            },
            {
                titulo: "Ansiedade - Como enfrentar o mal do seculo",
                autor: "Augusto Cury",
            },
            {
                titulo: "Os 7 habitos das pessoas altamente eficazes",
                autor:"Stephen R. Covey",
            },
        ],
        
    }
    
]
// categoria0=Array[0].categoria;
// categoria1=Array[1].categoria;
function NumDeLivrosECategorias(array) {
    let livros=0
    let cont=0;
    console.log (`Temos ${array.length} categorias`);
    for (let i = 0; i < array.length; i++) {
        livros=array[i].livros;
        cont=0;
        for (const iterator of livros) {
            cont++
        }
        console.log (`Na ${i+1}º categoria temos ${cont} livros`);
    }
   

}
NumDeLivrosECategorias(LivroPorCategoria)

function NumAutores(array) {
    let livros=0;
    let autor=0;
    let cont=0;
    let autores=new Array(5) //criando array para armazenar os autores para nao ter repetidos
    let contador=0;
    let Flag=false;
    for (let i = 0; i < array.length; i++) {
        livros=array[i].livros;
        cont=0;
        for (const iterator of livros) {
            autor=livros[cont].autor
            cont++
            Flag=false;
            for (let index = 0; index < autores.length; index++) { //for pra percorrer a array
   
                if (autores[index] == autor) { //teste de esse autor ja foi resgistrado
                    Flag=true;
                    break;
                }
                
            }
            if (Flag==false) { //adiciona o autor
                contador++
                autores.push(autor)
            }
        }
    }
    console.log(`Atualmente temos ${contador} autores. Dentre eles temos ${autores.slice(5,autores.length)}`)
}
NumAutores(LivroPorCategoria)

function livrosDeAutor(Autor) {
    let livros=0;
    let cont=0; 
    let titulos =""
    for (let i = 0; i < LivroPorCategoria.length; i++) { //pegando os titulos
        livros=LivroPorCategoria[i].livros;
        cont=0;
        for (const iterator of livros) {
            if (livros[cont].autor==Autor) {
                titulos+=livros[cont].titulo + "&#"
            }
            cont++
        }

    }
    console.log(`O autor ${Autor} tem estes titulos : ${titulos.replace("&#",", ").replace("&#","")}`) //Apenas para printar bonito
}
livrosDeAutor("Augusto Cury")