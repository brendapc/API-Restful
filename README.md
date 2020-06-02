# API-Restful

##API REST RESTful

client (site/app)
garçom->pegar pedido, levar pratos, entregar conta (API)  ##intermediador
cozinha (server)

Application Programming de Interface (API){
    conjunto de rotinas e padrões estabelecidos por uma aplicação
    para que outros aplicativos possam utilizar as funcionalidades
    desta aplicação
}

-responsável por esbelecer comunicação entre diferentes serviços, "meio-de-campo" entre as tecnologias, intermediador de troca de informações.




## REpresententional State Transfer (REST){
    será feita a trasferencia de dados de forma representativa, simbolica, figurativa

    A trasferencia de dados geralmente usando o protocolo HTTP
}
com algumas "obrigações" nessas trasferencias de dados

o que é ser RESTFUL -> cumprir padrões REST

os dados são chamados de resources (uma entidade ou objeto)


6 obrigações(constraints):

1.Client-server:
    o cliente e o servidor tem que ficar separados
    exemplo (react web, react native)

2.Stateless:
    cada requisição que o clinte faz ao servidor tem que conter todas as informações necessarias para o servidor entender e responder (RESPONSE) a requisição (REQUEST)

    API fechadas:
    o servidor não poder armazenar a sessão do usuario por exemplo, essa requisição tem que ser enviada todas as vezes para saber se aquele usuario esta apto e autenticado para usar os serviços (tokens para essa comunicação)

3.Cacheable:
    as respostas para uma requisição deverão ser explicitas ao dizer se aquela requisição pode ou não ser cacheada pelo cliente

4.Layered System:
-URI,Endpoint:
github.com/"brendapc"
 |               |
 |               -> Endpoint
URI-> o caminho completo

    o cliente acessa o endpoit sem saber  da complexidade, de quais passos estão sendo necessários para o servidor responder aquela requisição,ou com quais outras camadas o servidor esta lidando para que a requisição seja respondida

5.code on demand(optional):
 da a possibilidade da aplicação pegar codigos,
 como javascript por exemplo, e executar no cliente
---------------------------------------
Restaurante->
limpinho,
atendimento bom,
te de oq vc pediu

Cliente->
educação,
cumprir com o pagamento