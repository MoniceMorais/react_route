# Notas

### Para habilitar o json-server
npx json-server -p 3500 -w data/db.json

### Para instalar o react-router
npm install react-router-dom

## Configurando o React Router
Para configurar o React Router vamos ter que importar três elementos de react-router-dom:

1- BrowserRouter: Define aonde a área do nosso app que vai trocar as páginas (geralmente entre barra de navegação e o rodapé)

2- Routes: define as rotas.

3- Route: um elemento desse para cada rota individual, configurar com path e componente da rota

## Adicionando links
Para criar links para as páginas vamos precisar de utilizar o **Link** do React Router.

No **Link** configuramos o parâmeto **to**, que recebe a **URL/path** que será redirecionado ao clicar no link.