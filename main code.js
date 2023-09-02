//Inserção da modalidade a ser analisada
let modalidade = prompt('Insira uma das modalidades disponíveis')

//Obtenção da idade para designar a classificação mediante a modalidade
let idade = parseFloat(prompt('Insira a idade em anos'))

//Definição de casos inválidos
if(idade < 0){
    alert('Idade inválida')


    //Modalidade do futebol
    } else {
        if(modalidade == 'Futebol' || modalidade == 'futebol'){
            if(idade < 20){
                alert('Sub-20 - Futebol')
        
            } else {
                if(idade < 40){
                    alert('Adulto - Futebol')
        
                } else {
                    if(idade >= 40){
                        alert('Veteranos - Futebol')
            
                    }
                }
            } 

        //Modalidade da natação        
        } else {
            if(modalidade == 'Natação' || modalidade == 'natação' || modalidade == 'natacao'){
                if(idade < 13){
                    alert('Junior - Natação')

                } else {
                    if(idade < 17){
                        alert('Infanto-Juvenil - Natação')

                    } else {
                        if(idade < 31){
                            alert('Junior-Senior - Natação')

                        } else {
                            if(idade >= 31){
                                alert('Senior - Natação')
                            }
                        }
                    }
               }
            
            //Modalidade do Surf   
            } else {
                if(modalidade == 'Surf' || modalidade == 'surf'){
                    if(idade < 16){
                        alert('Mirim - Surf')

                    } else {
                        if(idade < 19){
                            alert('Junior - Surf')

                        } else {
                            if(idade < 40){
                                alert('Open - Surf')

                            } else {
                                if(idade >=40){
                                    alert('Grand Master - Surf')
                                }
                            }
                        }
                    }
            
            //Modalidade do League of Legends
            } else {
                if(modalidade == 'LoL' || modalidade == 'LOL' || modalidade == 'Lol' || modalidade == 'lol'){
                    if(idade < 13){
                        alert('Bronze - LOL')

                    } else {
                         if(idade < 17){
                            alert('Prata - LOL')

                            } else {
                                if(idade >= 17){
                                    alert('Ouro - LOL')
                            }
                        }
                    }

                //Definição de casos inválidos    
                } else {
                     alert('Modalidade indisponível')
                }
             }
        } 
    } 
}   
