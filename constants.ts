
import type { Faq, Step } from './types';

export const STEPPER_DATA: Step[] = [
  {
    title: 'Vistoria e Chaves',
    description: 'Realize a vistoria final, assine o termo de recebimento e pegue as chaves do seu novo lar.',
  },
  {
    title: 'Personalização',
    description: 'Planeje as modificações, reformas e a instalação dos móveis para deixar o imóvel com a sua cara.',
  },
  {
    title: 'Instalação de Serviços',
    description: 'Saiba como solicitar a ligação de água, energia, gás e internet para o seu novo endereço.',
  },
  {
    title: 'Vida em Condomínio',
    description: 'Entenda as regras, agende sua mudança e conheça mais sobre a administração e áreas comuns.',
  },
  {
    title: 'Garantia e Manutenção',
    description: 'Conheça a cobertura da garantia da construtora e como solicitar assistência técnica.',
  },
  {
    title: 'Documentação Final',
    description: 'Orientações sobre a escritura definitiva, registro do imóvel e transferência de titularidade do IPTU.',
  },
];

export const FAQ_DATA: Faq[] = [
  {
    question: 'O que devo verificar durante a vistoria do meu apartamento?',
    answer: 'Na vistoria, verifique o funcionamento de portas e janelas, pontos elétricos e hidráulicos, a qualidade da pintura, a integridade de pisos e revestimentos, e se há algum vazamento. Leve o memorial descritivo para comparar. Acesse nosso <a href="#" class="text-sky-600 font-semibold hover:underline">checklist completo de vistoria</a>.',
    step: 'Vistoria e Chaves',
  },
  {
    question: 'Encontrei um problema na vistoria, o que devo fazer?',
    answer: 'Qualquer divergência ou defeito encontrado deve ser formalmente registrado no termo de vistoria. A construtora irá analisar e providenciar os reparos necessários antes da entrega definitiva das chaves.',
    step: 'Vistoria e Chaves',
  },
  {
    question: 'Posso alterar o layout do meu imóvel, como quebrar paredes?',
    answer: 'Alterações estruturais, como a remoção de paredes, exigem a análise de um engenheiro para garantir que não afetem a segurança do prédio. Antes de qualquer modificação, consulte o manual do proprietário e, se necessário, entre em contato com nosso <a href="#" class="text-sky-600 font-semibold hover:underline">departamento de engenharia</a>.',
    step: 'Personalização',
  },
  {
    question: 'Como solicito as plantas do meu imóvel para o projeto de móveis?',
    answer: 'Você pode solicitar as plantas (elétrica, hidráulica e estrutural) do seu imóvel através do <a href="#" class="text-sky-600 font-semibold hover:underline">Portal do Cliente</a>. Elas são essenciais para um planejamento seguro e eficiente.',
    step: 'Personalização',
  },
  {
    question: 'Quais são os procedimentos para ligar a energia elétrica e a água?',
    answer: 'Após o recebimento das chaves, você deve procurar as concessionárias de energia e água da sua cidade, levando seus documentos pessoais e o contrato de compra e venda do imóvel para solicitar a transferência de titularidade e a ligação dos serviços.',
    step: 'Instalação de Serviços',
  },
  {
    question: 'Quais são as regras do condomínio para realizar minha mudança?',
    answer: 'Geralmente, as mudanças precisam ser agendadas com a administração do condomínio para reservar o elevador de serviço e evitar transtornos. Verifique o regimento interno para conhecer os dias e horários permitidos.',
    step: 'Vida em Condomínio',
  },
  {
    question: 'Como funciona o pagamento da primeira taxa de condomínio?',
    answer: 'A responsabilidade pelo pagamento do condomínio inicia-se a partir do recebimento das chaves. O primeiro boleto será enviado pela administradora do condomínio para o seu endereço ou e-mail cadastrado.',
    step: 'Vida em Condomínio',
  },
  {
    question: 'Qual é o prazo de garantia do meu imóvel?',
    answer: 'A garantia para defeitos aparentes é de 90 dias. Para falhas que afetam a solidez e segurança da edificação, a garantia é de 5 anos. Consulte o manual do proprietário para ver a cobertura detalhada de cada item (pintura, instalações, etc.).',
    step: 'Garantia e Manutenção',
  },
  {
    question: 'Como aciono a assistência técnica da construtora?',
    answer: 'Para solicitar assistência técnica dentro do prazo de garantia, abra um chamado diretamente no <a href="#" class="text-sky-600 font-semibold hover:underline">Portal do Cliente</a>, descrevendo o problema e, se possível, anexando fotos. Nossa equipe entrará em contato para agendar uma visita.',
    step: 'Garantia e Manutenção',
  },
  {
    question: 'Quando receberei a escritura definitiva do meu imóvel?',
    answer: 'Se você financiou, a escritura definitiva é emitida após a quitação total do financiamento. Se a compra foi à vista, o processo pode ser iniciado logo após a emissão do Habite-se. Nossa equipe de documentação entrará em contato para orientá-lo.',
    step: 'Documentação Final',
  },
];
