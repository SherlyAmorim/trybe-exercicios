/*Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa*/

const newEmployees = (createEmail) => {
    const employees = {
      id1: createEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: createEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: createEmail('Carla Paiva Silva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  
const createEmail = (fullName) => {
    const newEmail = fullName.toLowerCase().split(' ').join('_'); //split separa e join junta (ambos de acordo com o parâmetro passado)/ replace(' ', '_') faria a mesma função do 'split join' porém apenas para 2 palavras.

    return {fullName, email:`${newEmail}@trybe.com`};
};
 
  console.log(newEmployees(createEmail));