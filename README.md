# 📋 ToDoApp - Teste Prático de Desenvolvedor React Native

Aplicativo desenvolvido como solução para o desafio técnico de desenvolvedor front-end mobile. Trata-se de uma aplicação completa de lista de tarefas, com sistema de autenticação simulado, gerenciamento de tarefas com prioridade, dark mode e usabilidade baseada em layout fornecido pelo Figma.

---

## 🧩 Funcionalidades

* ✅ Login e Cadastro com validação de campos
* ✅ Navegação segura entre telas com React Navigation
* ✅ Listagem de tarefas
* ✅ Criação, edição e exclusão de tarefas
* ✅ Marcação de tarefas como concluídas
* ✅ Priorização visual: Alta 🔴, Média 🟠, Baixa 🟢
* ✅ Seleção de data de entrega via date picker
* ✅ Modo escuro ativável manualmente 🌙
* ✅ Contagem por filtro: Todas, Pendentes, Concluídas

---

## ⚙️ Tecnologias Utilizadas

* **React Native** - Base da aplicação
* **TypeScript** - Tipagem estática em todo o projeto
* **Zustand** - Gerenciamento de estado global (auth, tarefas, tema)
* **React Navigation** - Navegação entre telas
* **NativeWind** - Tailwind CSS adaptado para React Native
* **react-native-date-picker** - Seleção de data nativa
* **react-native-svg + svg-transformer** - Suporte a imagens SVG

---

## 🧠 Arquitetura

```txt
src/
├── components/      → Componentes reutilizáveis (Header, TaskInput, etc)
├── screens/         → Telas: Login, Register, Home, EditTaskModal
├── navigation/      → AppNavigator, MainAppStack
├── store/           → Zustand stores: authStore, taskStore, themeStore
├── types/           → Tipagens globais como Task
├── utils/           → Funções auxiliares (ex: formatDate)
assets/
├── icons/           → Ícones em SVG (logo, calendário, etc)
```

---

## 🧪 Validações Implementadas

* ✔️ Campos de login e cadastro obrigatórios
* ✔️ Botões desabilitados até que todos os campos estejam preenchidos
* ✔️ Feedback visual com cor de fundo nos botões desabilitados

---

## 🌙 Dark Mode

* `dark:` aplicado com NativeWind
* Cores como `bg-background`, `text-foreground`, `bg-card`, `bg-muted` seguem tema claro/escuro
* Tema salvo via Zustand (modo escuro manual com persistência)

---

## 🔐 Autenticação (simulada)

* `authStore.ts` controla estado autenticado via Zustand
* Telas de login e cadastro com navegação condicional
* Sessão simulada (pode ser facilmente conectada a uma API)

---

## 📦 Como rodar o projeto

```bash
yarn install
cd ios && pod install && cd ..
npx react-native start --reset-cache
npx react-native run-ios     # ou
npx react-native run-android
```

---

## 📱 Como gerar o APK (Android)

```bash
cd android
./gradlew assembleRelease
```

Arquivo gerado em:

```txt
android/app/build/outputs/apk/release/app-release.apk
```

Transfira para o dispositivo ou emulador para testar.

---

## 📝 Decisões Técnicas

* 🪶 **Zustand**: leve, direto e eficaz para estados simples
* 🧩 **NativeWind**: estilização com classe, alinhada ao Tailwind CSS
* 🖼️ **SVG** como componente para personalização de cor e escala
* 🎯 Formulários controlados com `useState` para clareza e leveza

---

## 🚧 Desafios enfrentados

* 🔁 Conflitos com `.ttf` duplicados (resolvido via Xcode manualmente)
* 🔄 Incompatibilidade com `react-native-svg-transformer` (resolvido via `metro.config.js`)
* 🧭 Navegação condicional baseada em Zustand exigiu atenção ao re-render

---

## ✅ Conclusão

O projeto está 100% alinhado com os critérios do teste prático:

* Interface moderna e responsiva ✅
* Navegação fluida ✅
* Funcionalidades completas ✅
* Arquitetura organizada ✅
* Documentação clara ✅

> Feito com atenção à performance, usabilidade e manutenção futura. Pronto para produção ou expansão. 💪

---

Feito com 💜 por **Raphael Mardine**
