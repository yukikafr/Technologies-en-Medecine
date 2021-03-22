
var monQuizz = [
    {
        question: "Da Vinci est un appareil autonome, le chirurgien n’est plus nécessaire.",
        answers: {
            a: 'Vrai',
            b: 'Faux'
        },
        correctAnswer: 'b'
    },
    {
        question: "Cette technologie  n’en est plus à ses premiers balbutiements, on a plusieurs génétations de robots, depuis plus de 20 ans.",
        answers: {
            a: 'Vrai',
            b: 'Faux'
        },
        correctAnswer: 'a'
    },
	{
        question: "Un des avantages du robot est qu’il prend peu de place.",
        answers: {
            a: 'Vrai',
            b: 'Faux'
        },
        correctAnswer: 'b'
	},
	{
        question: "Le robot est extrèmement onéreux.",
        answers: {
            a: 'Vrai',
            b: 'Faux'
        },
        correctAnswer: 'a'
	},
	{
        question: "La deuxième invention permet de lire les pensées avec un taux de réussite total, 100 %.",
        answers: {
            a: 'Vrai',
            b: 'Faux'
        },
        correctAnswer: 'b'
	},
	{
        question: "Les paralysés se déclarent heureux et toujours avec la volonté de vivre.",
        answers: {
            a: 'Vrai',
            b: 'Faux'
        },
        correctAnswer: 'a'
	},
	{
        question: "Sur le long terme le but de cette interface est d’amener à une meilleure compréhension des paralysés, pour rétablir leur système nerveux.",
        answers: {
            a: 'Vrai',
            b: 'Faux'
        },
        correctAnswer: 'a'
	},
	{
        question: "On imprime la peau directement sur le patient et la zone brulée.",
        answers: {
            a: 'Vrai',
            b: 'Faux'
        },
        correctAnswer: 'a'
	},
	{
        question: "L’imprimante permet d’imprimer de la peau à partir de n’importe quelles cellules humaines.",
        answers: {
            a: 'Vrai',
            b: 'Faux'
        },
        correctAnswer: 'b'
	},
	{
        question: "On s’est déjà servi de l’imprimante sur des humains.",
        answers: {
            a: 'Vrai',
            b: 'Faux'
        },
        correctAnswer: 'b'
	},
];

var quizzvar = document.getElementById('quizz');
var resultats = document.getElementById('results');
var submitButton = document.getElementById('submit');

generationDuQuiz(monQuizz, quizzvar, resultats, submitButton);

function generationDuQuiz(questions, quizzvar, resultats, submitButton){

    function affichageQuestion(questions, quizzvar){
        // on a d abord besoin de variables pour stocker les valeurs
        var output = [];
        var answers;

        // pour chaque question...
        for(var i=0; i<questions.length; i++){
            
            // on reset le tableau contenant les reponses
            answers = [];

            // pour chaque reponse disponible...
            for(letter in questions[i].answers){

                // ...on ajoute un bouton radio
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // on ajoute la question et la reponse associee a l'output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // enfin on transforme l'output en HTML
        quizzvar.innerHTML = output.join('');
    }


    function maFonction(questions, quizzvar, resultats){
        
        // on récupère les réponses de notre quizz
        var reponsesvar = quizzvar.querySelectorAll('.answers');
        
        // On en garde une trace
        var repUser = '';
        var numCorrect = 0;
        
        // On le fait pour chaque question...
        for(var i=0; i<questions.length; i++){

            // On check les réponses
            repUser = (reponsesvar[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // On regarde si elle est bonne
            if(repUser===questions[i].correctAnswer){
                // On ajoute au compteur de bonnes reponses
                numCorrect++;
                
                // la reponse apparaitra alors en vert
                reponsesvar[i].style.color = 'lightgreen';
            }
            // ou alors fausse, ou si personne n'a repondu
            else{
                // la reponse apparaitra alors en rouge
                reponsesvar[i].style.color = 'red';
            }
        }

        // On affiche la note
        resultats.innerHTML = numCorrect + ' sur ' + questions.length;
    }

    // On montre la question tout de suite
    affichageQuestion(questions, quizzvar);
    
    // quand on soumet les questions, montrer les resultats
    submitButton.onclick = function(){
        maFonction(questions, quizzvar, resultats);
    }

}