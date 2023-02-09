const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const resultExam = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
    if (RIGHT_ANSWERS === STUDENT_ANSWERS){
        return 1;
    } else if (STUDENT_ANSWERS === 'N.A'){
        return 0;
    }
    return -0.5;
};

const check_Answers = (RIGHT_ANSWERS, STUDENT_ANSWERS, resultExam) => {
    let cont = 0;
    for (let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
        const actionReturn = resultExam(RIGHT_ANSWERS[index], STUDENT_ANSWERS[index]);
        cont += actionReturn;        
    }
    return `Resultado Final: ${cont} pontos`;
};

console.log(check_Answers(RIGHT_ANSWERS, STUDENT_ANSWERS, resultExam));