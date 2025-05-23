ToDoApp - Teste Prático de Desenvolvedor React Native

Aplicativo desenvolvido como solução para o desafio técnico de desenvolvedor front-end mobile. Trata-se de uma aplicação completa de lista de tarefas, com sistema de autenticação simulado, gerenciamento de tarefas com prioridade e data, dark mode, etc.

🧩 Funcionalidades

Login e Cadastro com validação de campos

Navegação segura entre telas com React Navigation

Listagem de tarefas

Criação, edição e exclusão de tarefas

Marcação de tarefas como concluídas

Priorização visual: Alta 🔴, Média 🟠, Baixa 🟢

Seleção de data de entrega via date picker

Modo escuro ativável manualmente 🌙

Contagem por filtro: Todas, Pendentes, Concluídas

⚙️ Tecnologias Utilizadas

React Native - Base da aplicação

TypeScript - Tipagem estática em todo o projeto

Zustand - Gerenciamento de estado global (auth, tarefas, tema)

React Navigation - Navegação entre telas

NativeWind - Tailwind CSS adaptado para React Native

react-native-date-picker - Seleção de data nativa

react-native-svg + svg-transformer - Suporte a imagens SVG

🧠 Arquitetura

src/
├── components/      # Componentes reutilizáveis (Header, TaskInput, etc)
├── screens/         # Telas: Login, Register, Home, EditTaskModal
├── navigation/      # AppNavigator, MainAppStack
├── store/           # Zustand stores: authStore, taskStore, themeStore
├── types/           # Tipagens globais como Task
├── utils/           # Funções auxiliares (ex: formatDate)
assets/
├── icons/           # Ícones em SVG (logo, calendário, etc)

🧪 Validações Implementadas

Campos de login e cadastro obrigatórios

Botões desabilitados até que todos os campos estejam preenchidos

Feedback visual com cor de fundo nos botões desabilitados

🌙 Dark Mode

Implementado com dark: do NativeWind

Classe dark:bg-* e dark:text-* aplicadas em todos os elementos principais

Toggle entre light/dark salvo via Zustand

🔐 Autenticação (simulada)

Autenticação controlada por Zustand (authStore.ts)

Navegação entre Login, Register e MainApp baseada em isAuthenticated

Estado persistente durante a sessão (pode ser extendido para AsyncStorage facilmente)

📦 Como rodar o projeto

yarn install
cd ios && pod install && cd ..
npx react-native start --reset-cache
npx react-native run-ios # ou run-android

📱 Gerar APK (Android)

Gere o APK com:

cd android
./gradlew assembleRelease

O arquivo será gerado em:

android/app/build/outputs/apk/release/app-release.apk

Transfira o APK para seu dispositivo ou emulador para testes.

📝 Decisões Técnicas

Zustand escolhido por ser leve, conciso e eficiente para estados globais simples

NativeWind para uma abordagem Tailwind-like na estilização, garantindo consistência visual e suporte nativo ao tema escuro

SVG como componente para controle dinâmico de tamanho e cor

Formulários controlados via useState para manter a simplicidade

🧠 Desafios encontrados

Conflitos com fontes .ttf duplicadas (resolvido limpando Copy Bundle Resources)

Incompatibilidades entre Metro bundler e svg-transformer (ajustado com o metro.config.js correto)

Navegação condicional com Zustand exigiu uso inteligente de reatividade

✅ Conclusão

O projeto está alinhado com os critérios do teste prático, oferece uma interface moderna, responsiva e funcional, além de demonstrar domínio técnico com as principais tecnologias exigidas para a vaga.

Feito com atenção a performance, usabilidade e organização. Pronto para produção e expansão.

Feito com 💜 por Raphael Mardine

