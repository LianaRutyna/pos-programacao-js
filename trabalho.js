
    function geradorDeTagsDeIdentificacao(nome) {
        return nome.toUpperCase();
    }
    geradorDeTagsDeIdentificacao ('Pantera')

    function verificarSePodeSerAdotado(idade, porte) {
        const idadeMinima = 2
        const adocao = idade >= idadeMinima 
                  ? 'sim'
                  : porte === 'M' 
                  ? 'sim'
                  : 'não'
        return true
     }
     verificarSePodeSerAdotado (1, 'M')
    
        
    const peso = 14.5
    function calcularConsumoDeRacao(nome, idade, peso) {
        const gramasPorDia = peso * 300
        return gramasPorDia
    }
    calcularConsumoDeRacao ('Pitoco', 1, 14.5)
    

    function decidirTipoDeAtividadePorPorte(porte) {
        let atividade;
      
        switch (porte) {
          case 'pequeno':
            atividade = 'brincar dentro de casa';
            break;
          case 'médio':
            atividade = 'caminhada no quarteirão';
            break;
          case 'grande':
            atividade = 'correr no parque';
            break;
          default:
            atividade = 'porte inválido';
        }
      
        return atividade;
      }
    decidirTipoDeAtividadePorPorte ('pequeno')


    async function buscarDadoAsync (nome) {
        const dados = ['Mel', 'Pipoca', 'Pitoco'];
        let resultado = '';

        dados.forEach((item) => {
            if (item === 'Pipoca') {
              resultado = item;
            }
          });
        
          return resultado;
        }
    buscarDadoAsync

    export  {
        geradorDeTagsDeIdentificacao, verificarSePodeSerAdotado, calcularConsumoDeRacao,
        decidirTipoDeAtividadePorPorte, buscarDadoAsync  
    }