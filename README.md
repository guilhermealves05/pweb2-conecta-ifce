# 🎓 ConectaIFCE - Rede Social Acadêmica

O **ConectaIFCE** é uma plataforma de rede social desenvolvida para a comunidade acadêmica do Instituto Federal do Ceará (IFCE). O objetivo do sistema é conectar alunos, professores e técnicos, permitindo a formação de grupos de estudo, compartilhamento de projetos e networking institucional.

Este repositório contém a aplicação **Frontend**, desenvolvida como parte do Trabalho Avaliativo N2 da disciplina de **Programação Web II**.

---

## 🚀 Tecnologias Utilizadas

A stack principal escolhida para este projeto foca em performance, tipagem estática e produtividade no desenvolvimento:

* **React 19** + **Vite:** Para uma renderização rápida e um ambiente de desenvolvimento (HMR) instantâneo.
* **TypeScript:** Tipagem estática rigorosa (DTOs e Domínios) para garantir a integridade dos dados consumidos da API.
* **TailwindCSS:** Estilização baseada no conceito de utility-first.
* **shadcn/ui:** Componentes acessíveis, customizáveis e que não ficam presos a node_modules.
* **React Router:** Gerenciamento de rotas públicas e privadas através de Layouts.
* **React Hook Form + Zod:** Gerenciamento de formulários complexos e validação de esquemas de dados.

---

## ⚙️ Como Rodar o Projeto Localmente

1. Clone o repositório:
git clone https://github.com/SEU_USUARIO/pweb2-conecta-ifce.git
cd pweb2-conecta-ifce

2. Instale as dependências:
npm install

3. Configure as Variáveis de Ambiente:
Crie um arquivo .env na raiz do projeto e adicione a URL da sua API:
VITE_API_URL=http://localhost:3000/api

4. Inicie o servidor de desenvolvimento:
npm run dev

O projeto estará rodando em http://localhost:5173.

---

## 🧠 Decisões Arquiteturais e Refatorações

Em conformidade com os requisitos da disciplina, a estrutura inicial do projeto foi refatorada e expandida para adotar padrões mais robustos e escaláveis. Abaixo estão as principais decisões técnicas adotadas em relação à versão base do projeto:

### 1. Arquitetura Modular (Feature-Sliced Design)
Em vez de agrupar arquivos apenas por tipo (todos os componentes numa pasta, todos os hooks noutra), o projeto foi dividido por **domínios de negócio** na pasta src/features/ (ex: auth, users, follow).
* **Vantagem:** Alta coesão. Tudo o que diz respeito à autenticação (serviços, componentes, schemas e armazenamento) está isolado no mesmo lugar. O que é global reside na pasta src/shared/.

### 2. Separação de Lógica com Custom Hooks (Funcionalidade Extra)
Para evitar componentes visualmente poluídos, a lógica de negócio foi extraída para **Custom Hooks**.
* **Exemplo:** O componente visual form-login.tsx não sabe como validar o Zod ou como chamar a API. Ele apenas consome o hook useFormLogin.ts, que centraliza os estados de erro, carregamento e a submissão.
* **Vantagem:** Os componentes React mantêm-se estritamente responsáveis pela camada de visualização (UI), facilitando testes e manutenção.

### 3. Cliente HTTP Centralizado e Injeção de JWT
Foi criado um wrapper sobre a Fetch API no arquivo src/infra/http/http-client.ts.
* **Justificativa:** Em vez de espalhar lógicas de cabeçalhos (Authorization: Bearer <token>) por dezenas de componentes, o http-client intercepta as requisições, busca o token no localStorage e o injeta automaticamente.

### 4. Padronização de Erros da API
Foi implementada uma classe ApiError (infra/http/api-error.ts) que mapeia o retorno padronizado de erros do backend.
* **Justificativa:** Isso garante que o frontend não quebre ao receber Status Codes de falha e consiga extrair a mensagem correta (error.message) de forma tipada e segura para exibir ao utilizador final.

### 5. Layouts de Roteamento Aninhados
As páginas foram separadas utilizando componentes de Layout (PublicLayout e AppLayout).
* **Justificativa:** O React Router renderiza o conteúdo específico das páginas através do <Outlet />, garantindo que elementos persistentes, como a Navbar e o Footer, não sejam recarregados a cada transição de rota.

---
## 👨‍💻 Autor

* **Guilherme Alves dos Santos**
* Estudante de Análise e Desenvolvimento de Sistemas - IFCE Campus Tauá
* Disciplina: Programação Web II (Prof. Lucas Mendes)

*Este projeto foi desenvolvido focado em manter um histórico de commits limpo e seguindo a convenção de Conventional Commits.*
