

const quiz = [{
    qno : 1,
    question : 'MNNA stands for ?',
    options : {
        'A': 'Major Non NATO ally',
        'B': 'Main Non NATO ally',
        'C': 'Modern Non NATO ally',
        'D': 'Minor Non NATO ally'
    },
    answer : 'A'
},
{
    qno : 2,
    question : 'What is the Name of Google’s Parent Company ?',
    options : {
        'A': 'Alphabet Inc',
        'B': 'Amazon',
        'C': 'The Priceline Group',
        'D': 'None Of These'
    },
    answer : 'A'
},{
    qno : 3,
    question : 'Pound Sterling is the Currency of ?',
    options : {
        'A': 'United States',
        'B': 'United Kingdom',
        'C': 'Germany',
        'D': 'Canada'
    },
    answer : 'B'
},
{
    qno : 4,
    question : 'Maximum spoken language in the world is ?',
    options : {
        'A': 'Arabic',
        'B': 'English',
        'C': 'Mandarin',
        'D': 'Spanish'
    },
    answer : 'C'
},
{
    qno : 5,
    question : 'Second most populous country in the world is ?',
    options : {
        'A': 'Russia',
        'B': 'India',
        'C': 'Nigeria',
        'D': 'Indonesia'
    },
    answer : 'B'
}];


exports.getQuestions = function(req,res){

    let questions = [];
    let qs = [];

    while(questions.length<5){
        const t = Math.floor((Math.random() * 5));
        if(!qs.includes(t)){
            questions.push(quiz[t]);
            qs.push(t);
        }
    }
    
    res.send({
        success: true,
        payload : questions
    });
}