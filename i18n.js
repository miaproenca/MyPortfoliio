/* ==========================================================
   Idioma do portfólio (inglês / português)

   O HTML continua escrito em inglês. Este arquivo troca os textos
   quando o idioma escolhido é português e guarda a escolha da pessoa.

   >>> Mudou um texto no HTML? Mude também a chave igual aqui em PT,
   senão aquele trecho continua em inglês na versão em português. <<<

   Este script precisa vir ANTES de home.js e contact.js, porque eles
   leem os textos já traduzidos.
   ========================================================== */

const PT = {
  // ---- Menu e elementos comuns ----
  "Home": "Início",
  "Projects": "Projetos",
  "Contact": "Contato",
  "Back to gallery": "Voltar para a galeria",
  "Let's work": "Vamos trabalhar",
  "together.": "juntos.",
  "Get in touch": "Fale comigo",
  "Your illustration here": "Sua ilustração aqui",
  "Resume — Mirela Proença": "Currículo — Mirela Proença",
  "Projects — Mirela Proença": "Projetos — Mirela Proença",
  "Contact — Mirela Proença": "Contato — Mirela Proença",

  // ---- Home ----
  "Hey, I'm Mirela": "Oi, eu sou a Mirela",
  "UI/UX Designer|Product Designer|Mom to two schnauzers and a turtle": "UI/UX Designer|Product Designer|Mãe de dois schnauzers e uma tartaruga",
  "UI/UX Designer, Product Designer, Mom to two schnauzers and a turtle": "UI/UX Designer, Product Designer, mãe de dois schnauzers e uma tartaruga",
  "I'm a UI/UX and Product Designer interested in how things work, how people use them and how to make them better. Currently studying Design at PUCPR and learning to bring my ideas to life through iOS development at Apple Developer Academy.": "Sou UI/UX e Product Designer e me interesso por como as coisas funcionam, como as pessoas as usam e como torná-las melhores. Atualmente estudo Design na PUCPR e aprendo a dar vida às minhas ideias com desenvolvimento iOS na Apple Developer Academy.",
  "My resume": "Meu currículo",
  "See my work": "Ver projetos",
  "A little about me": "Um pouco sobre mim",
  "Right now": "Agora",
  "Studying": "Estudando",
  "Design at PUCPR": "Design na PUCPR",
  "Learning": "Aprendendo",
  "SwiftUI & iOS development": "SwiftUI e desenvolvimento iOS",
  "Designing": "Projetando",
  "Hooky & Cleck!": "Hooky e Cleck!",
  "Things I love": "Coisas que eu amo",
  "Crochet": "Crochê",
  "Color": "Cor",
  "Typography": "Tipografia",
  "iOS apps": "Apps iOS",
  "Details": "Detalhes",
  "A hobby I can't quit": "Um hobby que não largo",
  "My favorite thing to design": "O que mais gosto de projetar",
  "On repeat lately": "No repeat ultimamente",
  "tap to flip ↻": "toque para virar ↻",
  "Write yours here ✎": "Escreva aqui ✎",
  "Selected work": "Projetos selecionados",
  "Coming soon": "Em breve",

  // ---- Cards de projeto ----
  "Hooky: crochet organizer": "Hooky: organizador de crochê",
  "Cleck!: call sheet app for film sets": "Cleck!: app de ordem do dia para sets de filmagem",
  "Alerta Enchentes RS: flood monitoring app": "Alerta Enchentes RS: app de monitoramento de enchentes",
  "WebAluno PUCPR: student portal redesign": "WebAluno PUCPR: redesign do portal do estudante",

  // ---- Sobre mim ----
  "Resume": "Currículo",
  "Download CV": "Baixar currículo",
  "Education": "Formação",
  "Pontifical Catholic University of Paraná": "Pontifícia Universidade Católica do Paraná",
  "Bachelor of Design": "Bacharelado em Design",
  "Focus on UI/UX & Product Design": "Ênfase em UI/UX e Product Design",
  "UX/UI Design & iOS Development": "Design UX/UI e desenvolvimento iOS",
  "User Research": "Pesquisa com usuários",
  "Prototyping": "Prototipagem",
  "Licenses & certifications": "Licenças e certificados",
  "Design & UI": "Design e UI",
  "Figma: creating and evolving interface components": "Figma: criando e evoluindo componentes de uma interface",
  "Figma: components": "Figma: Componentes",
  "Figma: getting to know the tool": "Figma: Conhecendo a ferramenta",
  "UI Design: creating the design of a prototype": "UI Design: Criando o design de um protótipo",
  "UI Design: diving into digital interfaces": "UI Design: Mergulhando nas interfaces digitais",
  "iOS development": "Desenvolvimento iOS",
  "iOS Application Development: Advanced Concepts": "Desenvolvimento de Aplicações iOS: Conceitos Avançados",
  "iOS Application Development: Intermediate Concepts": "Desenvolvimento de Aplicações iOS: Conceitos Intermediários",
  "iOS Application Development Fundamentals": "Fundamentos do Desenvolvimento de Aplicações iOS",
  "HTML and CSS: header, footer and CSS variables": "HTML e CSS: cabeçalho, footer e variáveis CSS",
  "HTML and CSS: classes, positioning and Flexbox": "HTML e CSS: Classes, posicionamento e Flexbox",
  "HTML and CSS: development environments, file structure and tags": "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
  "Events & workshops": "Eventos e workshops",
  "iFood Camp: connecting data, people and technology": "iFood Camp: conectando dados, pessoas e tecnologia",
  "Ceramics workshop": "Workshop de cerâmica",
  "The Wave Tour - Figma in Brazil: Real Cases, Real Impact": "The Wave Tour - Figma no Brasil: Casos Reais, Impactos Reais",
  "50 Years of Design - 3rd Event": "50 anos de Design - 3º Evento",
  "FURF Talk - 50 Years of Design": "Palestra FURF - 50 Anos de Design",
  "50 Years of the Design Program": "50 Anos do curso de Design",
  "380 hours · Jul 2025": "380 horas · jul. de 2025",
  "Aug 2024": "ago. de 2024",
  "Aug 2025": "ago. de 2025",
  "Dec 2025": "dez. de 2025",
  "Jul 2026": "jul. de 2026",
  "Jun 2025": "jun. de 2025",
  "Mar 2025": "mar. de 2025",
  "Mar 2026": "mar. de 2026",
  "May 2025": "mai. de 2025",
  "Oct 2024": "out. de 2024",
  "Oct 2025": "out. de 2025",
  "Sep 2024": "set. de 2024",
  "Sep 2025": "set. de 2025",
  "Technical skills": "Habilidades técnicas",
  "UX research": "Pesquisa de UX",
  "Wireframing": "Wireframes",
  "Usability testing": "Testes de usabilidade",
  "Illustration": "Ilustração",
  "Personal skills": "Habilidades pessoais",
  "Communication": "Comunicação",
  "Empathy": "Empatia",
  "Collaboration": "Colaboração",
  "Critical thinking": "Pensamento crítico",
  "Attention to detail": "Atenção aos detalhes",
  "Time management": "Gestão do tempo",
  "Willingness to learn": "Vontade de aprender",

  // ---- Projetos ----
  "Things I've designed": "O que já projetei",
  "A collection of the products and interfaces I've been working on. Pick one to see the story behind it: the problem, the process and the final result.": "Uma coleção dos produtos e interfaces em que venho trabalhando. Escolha um para conhecer a história por trás dele: o problema, o processo e o resultado final.",
  "All": "Todos",
  "Product": "Produto",

  // ---- Contato ----
  "Let's talk": "Vamos conversar",
  "Have a project in mind, a question or just want to say hi? Pick the easiest way to reach me below. I'd love to hear from you.": "Tem um projeto em mente, uma dúvida ou só quer dar um oi? Escolha abaixo a forma mais fácil de falar comigo. Vou adorar ter notícias suas.",
  "Email": "E-mail",
  "Copy": "Copiar",
  "Copied ✓": "Copiado ✓",

  // ---- Estrutura das páginas de projeto ----
  "Year": "Ano",
  "Role": "Função",
  "Tools": "Ferramentas",
  "Team": "Equipe",
  "Period": "Período",
  "Format": "Formato",
  "Duration": "Duração",
  "With Gabriela Munhoz": "Com Gabriela Munhoz",
  "Overview": "Visão geral",
  "The problem": "O problema",
  "The challenge": "O desafio",
  "The goal": "O objetivo",
  "Process": "Processo",
  "Final screens": "Telas finais",
  "Key screens": "Telas principais",
  "What I learned": "O que aprendi",
  "Key decisions": "Principais decisões",
  "What we delivered": "O que entregamos",
  "Project stage": "Estágio do projeto",
  "View in Figma": "Ver no Figma",
  "Next: Hooky": "Próximo: Hooky",
  "Next: Cleck!": "Próximo: Cleck!",
  "Next: Alerta Enchentes RS": "Próximo: Alerta Enchentes RS",
  "Next: WebAluno": "Próximo: WebAluno",

  // ---- Hooky (textos provisórios, troque quando a página for preenchida) ----
  "Crochet organizer": "Organizador de crochê",
  "One or two sentences that sum up the project: what it is and who it helps.": "Uma ou duas frases que resumem o projeto: o que é e quem ele ajuda.",
  "Add tools": "Adicione as ferramentas",
  "X weeks": "X semanas",
  "Write a short overview here: what the project is, who it's for and why you made it.": "Escreva aqui uma visão geral curta: o que é o projeto, para quem é e por que você o fez.",
  "Mention the context (a course, a personal project...) and what makes it special.": "Conte o contexto (uma disciplina, um projeto pessoal...) e o que o torna especial.",
  "Describe the problem people face and how you found out about it.": "Descreva o problema que as pessoas enfrentam e como você o descobriu.",
  "Describe what the product should help people do.": "Descreva o que o produto deve ajudar as pessoas a fazer.",
  "Step 01": "Etapa 01",
  "Step 02": "Etapa 02",
  "Step 03": "Etapa 03",
  "Step 04": "Etapa 04",
  "Research": "Pesquisa",
  "Interviews, observation, references: what did you learn?": "Entrevistas, observação, referências: o que você aprendeu?",
  "Ideation": "Ideação",
  "Sketches, flows and the ideas you explored.": "Esboços, fluxos e as ideias que você explorou.",
  "Prototype": "Protótipo",
  "How you built the interface and the decisions behind it.": "Como você construiu a interface e as decisões por trás dela.",
  "Testing": "Testes",
  "What you tested and what changed afterwards.": "O que você testou e o que mudou depois.",
  "Welcome screen": "Tela de boas-vindas",
  "Project overview": "Visão geral do projeto",
  "Project home with the weekly schedule": "Início do projeto com a agenda da semana",
  "Call sheets": "Ordens do dia",
  "List of call sheets by shooting day": "Lista de ordens do dia por diária",
  "Cleck! project cover": "Capa do projeto Cleck!",
  "Screen flow": "Fluxo de telas",
  "Cleck! screen flow": "Fluxo de telas do Cleck!",
  "Open full size": "Abrir em tamanho real",
  "Hooky project cover": "Capa do projeto Hooky",
  "Onboarding": "Onboarding",
  "Onboarding screen": "Tela de onboarding",
  "Login screen": "Tela de login",
  "Create or join a project": "Criar ou entrar em um projeto",
  "Choice between creating or joining a project": "Escolha entre criar ou entrar em um projeto",
  "Add a scene": "Adicionar cena",
  "Form to add a scene": "Formulário para adicionar uma cena",
  "Profile": "Perfil",
  "Profile screen": "Tela de perfil",
  "Splash screen": "Tela de abertura",
  "Profile choice": "Escolha de perfil",
  "Choice between community and rescue profiles": "Escolha entre os perfis de comunidade e de resgate",
  "Updates": "Atualizações",
  "Weather and emergency updates": "Atualizações de clima e de emergência",
  "Notifications": "Notificações",
  "Emergency notifications": "Notificações de emergência",
  "Alerta Enchentes RS wireflow": "Wireflow do Alerta Enchentes RS",
  "Course curriculum": "Grade curricular",
  "Course curriculum by period": "Grade curricular por período",
  "Complementary activities": "Atividades complementares",
  "List of complementary activities": "Lista de atividades complementares",
  "Requests": "Protocolos",
  "List of student requests": "Lista de protocolos do estudante",
  "Screen 01": "Tela 01",
  "Screen 02": "Tela 02",
  "Screen 03": "Tela 03",
  "First lesson": "Primeira lição",
  "Something this project taught you.": "Algo que este projeto ensinou a você.",
  "Second lesson": "Segunda lição",
  "Something you would do differently next time.": "Algo que você faria diferente da próxima vez.",
  "Third lesson": "Terceira lição",
  "Something you're proud of.": "Algo de que você se orgulha.",

  // ---- Cleck! ----
  "Cleck!: a call sheet app for film sets. Case study by Mirela Proença.": "Cleck!: app de ordem do dia para sets de filmagem. Estudo de caso de Mirela Proença.",
  "The call sheet in your pocket": "A ordem do dia no seu bolso",
  "An iOS app that helps assistant directors organize shooting schedules and keep the whole film crew on the same page.": "Um app para iOS que ajuda assistentes de direção a organizar os cronogramas de filmagem e a manter toda a equipe alinhada.",
  "Team project, iOS app": "Projeto em equipe, app iOS",
  "On a film set, assistant directors (ADs) connect the director, the cast and every department. One of their main jobs is creating the call sheet: the document that says what will be shot each day, in what order, and when the crew arrives, breaks and wraps.": "Em um set de filmagem, os assistentes de direção conectam a direção, o elenco e todos os departamentos. Uma de suas principais tarefas é criar a ordem do dia: o documento que diz o que será filmado em cada dia, em que ordem e quando a equipe chega, faz pausas e encerra.",
  "Scenes are rarely shot in script order, so this schedule is constantly being organized and reorganized. Cleck! brings schedules, call sheets and team communication into one app. We built it as a team, using the Challenge Based Learning framework.": "As cenas raramente são filmadas na ordem do roteiro, então esse cronograma está sempre sendo organizado e reorganizado. O Cleck! reúne cronogramas, ordens do dia e comunicação da equipe em um só app. Desenvolvemos o projeto em equipe, usando a metodologia Challenge Based Learning.",
  "Without clear communication and organization processes, film crews lose alignment. That leads to repeated delays, piled-up tasks and wasted resources, which affect both the quality of the production and its completion.": "Sem processos claros de comunicação e organização, as equipes de filmagem perdem o alinhamento. Isso gera atrasos recorrentes, tarefas acumuladas e desperdício de recursos, o que afeta tanto a qualidade da produção quanto sua conclusão.",
  "Help ADs coordinate production in one place, making the process faster, more visual and less dependent on last-minute improvisation.": "Ajudar os assistentes de direção a coordenar a produção em um só lugar, tornando o processo mais rápido, mais visual e menos dependente de improvisos de última hora.",
  "Engage": "Engage (engajar)",
  "We brainstormed a wide range of professions, chose cinema and first focused on screenwriters.": "Fizemos um brainstorm sobre várias profissões, escolhemos o cinema e, no início, focamos em roteiristas.",
  "Investigate": "Investigate (investigar)",
  "A survey of film students and interviews with professionals showed that organizing and viewing call sheets was one of the biggest problems on set. It falls on ADs, so we changed our focus to them.": "Uma pesquisa com estudantes de cinema e entrevistas com profissionais mostraram que organizar e visualizar a ordem do dia era um dos maiores problemas no set. Essa tarefa cabe aos assistentes de direção, então mudamos nosso foco para eles.",
  "Define": "Define (definir)",
  "We created a persona and two user journeys, one for a whole audiovisual project and one for the AD’s tasks, then used MoSCoW to prioritize features and reduce scope.": "Criamos uma persona e duas jornadas de usuário, uma para um projeto audiovisual completo e outra para as tarefas do assistente de direção. Depois, usamos o método MoSCoW para priorizar funcionalidades e reduzir o escopo.",
  "Act": "Act (agir)",
  "We moved from visual identity and wireframes to the final interface in Figma, tracked tasks on a Notion kanban and built the app with SwiftUI and Firebase.": "Passamos da identidade visual e dos wireframes para a interface final no Figma, acompanhamos as tarefas em um kanban no Notion e desenvolvemos o app com SwiftUI e Firebase.",
  "The results": "Os resultados",
  "We finished every must-have feature, even after drastically reducing the scope, and the call sheet turned out the way we wanted. Several people working in the field found the project useful and important.": "Concluímos todas as funcionalidades essenciais, mesmo depois de reduzir drasticamente o escopo, e a ordem do dia ficou como queríamos. Várias pessoas que trabalham na área consideraram o projeto útil e importante.",
  "What's next": "Próximos passos",
  "We plan to publish the app on the App Store and bring back features cut for scope: multiple projects, light mode and a checklist of what each shooting day needs.": "Pretendemos publicar o app na App Store e retomar funcionalidades cortadas do escopo: vários projetos, modo claro e uma checklist do que cada dia de filmagem precisa.",
  "Components and color variables": "Componentes e variáveis de cor",
  "I got a much better understanding of how to work with components and color variables.": "Passei a entender muito melhor como trabalhar com componentes e variáveis de cor.",
  "Research can change the direction": "A pesquisa pode mudar o rumo",
  "We started out designing for screenwriters. Listening to people in the field pointed us to a more relevant problem and a different user.": "Começamos projetando para roteiristas. Ouvir quem trabalha na área nos levou a um problema mais relevante e a outro usuário.",
  "Scope is a design decision": "Escopo é uma decisão de design",
  "Cutting features early is what let us finish the essentials. If the scope feels just right, it is probably still too big.": "Cortar funcionalidades cedo foi o que nos permitiu concluir o essencial. Se o escopo parece ideal, provavelmente ainda está grande demais.",

  // ---- Alerta Enchentes RS ----
  "Alerta Enchentes RS: a flood monitoring app. Case study by Mirela Proença.": "Alerta Enchentes RS: app de monitoramento de enchentes. Estudo de caso de Mirela Proença.",
  "Real-time flood monitoring app": "App de monitoramento de enchentes em tempo real",
  "A free app concept that helps people in flood-prone areas of Rio Grande do Sul, Brazil, follow river levels and rainfall in real time and reach rescue teams.": "Conceito de app gratuito que ajuda quem vive em áreas sujeitas a enchentes no Rio Grande do Sul a acompanhar o nível dos rios e as chuvas em tempo real e a acionar equipes de resgate.",
  "Aug to Nov 2024": "Ago. a nov. de 2024",
  "Alerta Enchentes RS brings river levels, rainfall, weather forecasts, risk maps and emergency guidance into one place. It serves two groups: residents of at-risk areas, such as Rolante, and the rescue teams that work with them.": "O Alerta Enchentes RS reúne em um só lugar o nível dos rios, as chuvas, a previsão do tempo, mapas de risco e orientações de emergência. Ele atende dois grupos: moradores de áreas de risco, como Rolante, e as equipes de resgate que trabalham com eles.",
  "I designed it with Gabriela Munhoz in the Design Project III course of my Design degree, after the floods that hit Rio Grande do Sul in April and May 2024. We took it from research to a high-fidelity prototype.": "Projetei o app com Gabriela Munhoz na disciplina de Projeto de Design III da minha graduação em Design, depois das enchentes que atingiram o Rio Grande do Sul em abril e maio de 2024. Levamos o projeto da pesquisa até um protótipo de alta fidelidade.",
  "People who lived through the floods lacked clear guidance. In our survey, 62% had received information on how to act, but only 25% considered the available information sufficient.": "Quem viveu as enchentes não tinha orientações claras. Em nossa pesquisa, 62% haviam recebido informações sobre como agir, mas só 25% consideravam suficientes as informações disponíveis.",
  "Improve flood prevention for communities in at-risk areas, with an accessible, simple and reliable tool that helps people plan ahead and act safely.": "Melhorar a prevenção de enchentes em comunidades de áreas de risco, com uma ferramenta acessível, simples e confiável que ajude as pessoas a se planejar e a agir com segurança.",
  "Starting from the broad theme of the climate crisis, we summarized 24 articles, mapped stakeholders and surveyed 46 people. Affinity diagrams and personas then narrowed the focus to floods.": "Partindo do tema amplo da crise climática, resumimos 24 artigos, mapeamos os stakeholders e aplicamos um questionário a 46 pessoas. Depois, diagramas de afinidade e personas estreitaram o foco para as enchentes.",
  "Reframing": "Reformulação",
  "A second survey reached 47 people, and 53% had been affected by the 2024 floods, directly or through family. Among those who answered, 26 of 27 wanted early alerts and forecasts, so we shifted our question from raising awareness to improving prevention.": "Um segundo questionário alcançou 47 pessoas, e 53% tinham sido afetadas pelas enchentes de 2024, diretamente ou por meio da família. Entre quem respondeu, 26 de 27 queriam alertas antecipados e previsões, então mudamos nossa pergunta de conscientização para prevenção.",
  "We mapped the user journey and benchmarked existing flood solutions. We then compared nine ideas against our criteria, ran a SWOT analysis on each, and chose a real-time alert app.": "Mapeamos a jornada do usuário e fizemos um benchmark de soluções existentes para enchentes. Depois, comparamos nove ideias com nossos critérios, fizemos uma análise SWOT de cada uma e escolhemos um app de alertas em tempo real.",
  "We created the visual identity, then the data structure and wireflows for both user flows, a style guide and high-fidelity prototypes.": "Criamos a identidade visual e, depois, a estrutura de dados e os wireflows dos dois fluxos de uso, um style guide e protótipos de alta fidelidade.",
  "A visual identity, a style guide, high-fidelity prototypes of both user flows, and promotional materials: an Instagram post and story, a banner and a flyer.": "Identidade visual, style guide, protótipos de alta fidelidade dos dois fluxos de uso e materiais de divulgação: post e story para Instagram, banner e flyer.",
  "An academic project taken to high-fidelity prototype, with a proposed model to keep the app free for users through local sponsors.": "Projeto acadêmico levado até o protótipo de alta fidelidade, com um modelo proposto para manter o app gratuito por meio de patrocinadores locais.",
  "Flood risk map": "Mapa de risco de enchentes",
  "Weather forecast": "Previsão do tempo",
  "Dashboard with weather, river levels and rainfall": "Painel com clima, nível dos rios e chuvas",
  "Alerta Enchentes RS project cover": "Capa do projeto Alerta Enchentes RS",
  "An app, not a physical product": "Um app, não um produto físico",
  "Going digital makes it possible to offer essential information at no cost, which matters in areas with limited resources.": "O formato digital permite oferecer informações essenciais sem custo, o que é importante em áreas com poucos recursos.",
  "Two flows, one source of truth": "Dois fluxos, uma fonte confiável",
  "Residents follow alerts and ask for help. Rescue teams manage requests, mark risk areas and publish alerts, so the information comes from people responsible for safety.": "Moradores acompanham alertas e pedem ajuda. Equipes de resgate gerenciam solicitações, marcam áreas de risco e publicam alertas, de modo que a informação vem de quem é responsável pela segurança.",
  "Simple under pressure": "Simples sob pressão",
  "Plain language, a green, yellow and red risk map, and an SOS button that sends the person’s name, phone and address to the rescue team after one confirmation.": "Linguagem simples, mapa de risco em verde, amarelo e vermelho e um botão de SOS que envia nome, telefone e endereço da pessoa à equipe de resgate após uma única confirmação.",

  // ---- WebAluno ----
  "WebAluno: a redesign of the PUCPR student portal. Case study by Mirela Proença.": "WebAluno: redesign do portal do estudante da PUCPR. Estudo de caso de Mirela Proença.",
  "Student portal redesign": "Redesign do portal do estudante",
  "A redesign of the PUCPR student portal, making grades, schedules, payments and documents easier to find and manage.": "Redesign do portal do estudante da PUCPR, que torna notas, horários, pagamentos e documentos mais fáceis de encontrar e gerenciar.",
  "WebAluno is the student portal of PUCPR, a university in Brazil. Students use it to check grades and attendance, pay tuition, open requests and look up the academic calendar.": "O WebAluno é o portal do estudante da PUCPR. É nele que os alunos consultam notas e frequência, pagam mensalidades, abrem protocolos e veem o calendário acadêmico.",
  "In a UI Design course, the brief was to redesign an existing interface. Gabriela Munhoz and I chose WebAluno and took it from wireflows to a style guide, a component library and final desktop screens.": "Na disciplina de UI Design, o desafio era fazer o redesign de uma interface existente. Gabriela Munhoz e eu escolhemos o WebAluno e fomos dos wireflows a um style guide, uma biblioteca de componentes e as telas finais para desktop.",
  "One portal has to cover many tasks, from grades and class schedules to payments, documents and notices. It also serves undergraduate and graduate students, including people who work or have busy routines.": "Um único portal precisa dar conta de muitas tarefas, de notas e horários de aula a pagamentos, documentos e avisos. Ele também atende estudantes de graduação e pós-graduação, incluindo quem trabalha ou tem uma rotina corrida.",
  "Make academic information easier to find and manage, with an intuitive, visually pleasant interface that students can use at any time, on any device.": "Tornar as informações acadêmicas mais fáceis de encontrar e gerenciar, com uma interface intuitiva e agradável que os estudantes possam usar a qualquer hora, em qualquer dispositivo.",
  "Understanding": "Entendimento",
  "We defined the target audience and business goals, then listed 12 usage scenarios, such as checking grades, paying tuition and opening a request.": "Definimos o público-alvo e os objetivos de negócio e listamos 12 cenários de uso, como consultar notas, pagar a mensalidade e abrir um protocolo.",
  "We mapped each scenario as a flow, with a wireframe for every screen, and organized the portal around a dashboard and a clear top menu.": "Mapeamos cada cenário como um fluxo, com um wireframe para cada tela, e organizamos o portal em torno de um dashboard e de um menu superior claro.",
  "Visual concept": "Conceito visual",
  "We built a reference board in Figma with examples of components and styling, and drew inspiration from the PUCPR website.": "Montamos um painel de referências no Figma com exemplos de componentes e estilização e nos inspiramos no site da PUCPR.",
  "We defined typography in Poppins, color scales, elevation and grids for desktop and mobile, then created a component library for consistency.": "Definimos a tipografia em Poppins, escalas de cor, elevação e grids para desktop e mobile. Depois, criamos uma biblioteca de componentes para garantir consistência.",
  "Wireflows for the portal's main areas, a reference board, a style guide, a component library, and final desktop screens for all the portal's menus.": "Wireflows das principais áreas do portal, painel de referências, style guide, biblioteca de componentes e telas finais para desktop de todos os menus do portal.",
  "A redesign proposal created for a university UI Design course, not an official PUCPR release.": "Proposta de redesign criada para uma disciplina de UI Design da faculdade, não uma versão oficial da PUCPR.",
  "Attendance by course": "Frequência por disciplina",
  "Grades by period": "Notas por período",
  "Academic calendar with event details": "Calendário acadêmico com detalhes dos eventos",
  "WebAluno project cover": "Capa do projeto WebAluno",
  "Academic calendar": "Calendário acadêmico",
  "A dashboard with the essentials": "Um dashboard com o essencial",
  "The home screen summarizes tuition with the option to pay, notices, current courses, grades, attendance and student details.": "A tela inicial resume a mensalidade, com a opção de pagamento, os avisos, as disciplinas do período, as notas, a frequência e os dados do estudante.",
  "Five clear menus": "Cinco menus claros",
  "Every task sits under Home, Academic, Financial, Administrative or Complementary, and breadcrumbs show students where they are.": "Cada tarefa fica em Página inicial, Acadêmico, Financeiro, Administrativo ou Complementar, e os breadcrumbs mostram aos estudantes onde eles estão.",
  "Answers without leaving the page": "Respostas sem sair da página",
  "Hovering over a marked date in the academic calendar explains what it means, such as a holiday, with no extra clicks.": "Ao passar o cursor sobre uma data marcada no calendário acadêmico, o estudante vê o que ela significa, como um feriado, sem cliques extras.",
};

/* Textos que estão em português no HTML (descrições para leitores de tela
   e buscadores) e precisam aparecer em inglês na versão em inglês. */
const EN = {
  "Foto de Mirela Proença": "Photo of Mirela Proença",
  "Navegação principal": "Main navigation",
  "Portfólio de Mirela Proença, UI/UX Designer.": "Portfolio of Mirela Proença, UI/UX Designer.",
  "Projetos de design de Mirela Proença.": "Design projects by Mirela Proença.",
  "Entre em contato com Mirela Proença.": "Get in touch with Mirela Proença.",
  "Hooky: crochet organizer. Estudo de caso de Mirela Proença.": "Hooky: crochet organizer. Case study by Mirela Proença.",
  "Filtrar projetos": "Filter projects",
  "Lista de projetos": "Project list",
  "Formas de contato": "Ways to get in touch",
  "Problema e objetivo": "Problem and goal",
  "Desafio e objetivo": "Challenge and goal",
  "Resultados e próximos passos": "Results and next steps",
  "Entregas e estágio do projeto": "Deliverables and project stage",
  "Outros projetos": "Other projects",
};

(() => {
  const KEY = 'portfolio-lang';

  let lang = 'en';
  try {
    if (localStorage.getItem(KEY) === 'pt') lang = 'pt';
  } catch { /* navegador sem acesso ao armazenamento: fica em inglês */ }

  const map = lang === 'pt' ? PT : EN;
  const t = (text) => (Object.hasOwn(map, text) ? map[text] : text);
  window.t = t; // usado pelo contact.js nos textos que ele mesmo gera

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.title = t(document.title);

  // ---- Textos das páginas ----
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const parent = node.parentElement.tagName;
    if (parent === 'SCRIPT' || parent === 'STYLE') continue;

    const clean = node.nodeValue.replace(/\s+/g, ' ').trim();
    if (!clean) continue;

    const translated = t(clean);
    if (translated !== clean) {
      const [before] = node.nodeValue.match(/^\s*/);
      const [after] = node.nodeValue.match(/\s*$/);
      node.nodeValue = before + translated + after;
    }
  }

  // ---- Textos em atributos ----
  ['aria-label', 'alt', 'data-roles'].forEach((attr) => {
    document.querySelectorAll(`[${attr}]`).forEach((el) => {
      el.setAttribute(attr, t(el.getAttribute(attr)));
    });
  });
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = t(description.content);

  // ---- Arquivos com versão em português (PDF do currículo, etiqueta "Em breve") ----
  if (lang === 'pt') {
    document.querySelectorAll('[data-href-pt]').forEach((el) => {
      el.href = el.dataset.hrefPt;
    });
    document.querySelectorAll('[data-src-pt]').forEach((el) => {
      el.src = el.dataset.srcPt;
    });
  }

  // ---- Chave de idioma (canto superior direito) ----
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'i18n.css';
  document.head.appendChild(css);

  const toggle = document.createElement('div');
  toggle.className = 'lang-toggle';
  toggle.innerHTML = `
    <span class="lang-toggle__label${lang === 'en' ? ' is-active' : ''}" aria-hidden="true">EN</span>
    <button class="lang-toggle__switch" type="button" role="switch"
            aria-checked="${lang === 'pt'}" aria-label="Português">
      <span class="lang-toggle__thumb"></span>
    </button>
    <span class="lang-toggle__label${lang === 'pt' ? ' is-active' : ''}" aria-hidden="true">PT</span>
  `;
  document.body.prepend(toggle);

  // Recarrega para o efeito de digitação e os ícones começarem no novo idioma
  toggle.querySelector('button').addEventListener('click', () => {
    try {
      localStorage.setItem(KEY, lang === 'pt' ? 'en' : 'pt');
    } catch { return; }
    location.reload();
  });
})();
