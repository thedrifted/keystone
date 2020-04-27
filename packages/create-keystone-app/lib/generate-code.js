const { getAdapterTemplateContent } = require('./get-adapter-template-content');
const { getProjectName } = require('./get-project-name');
const { getAdapterConfig } = require('./get-adapter-config');

const generateCode = async () => {
  const adapterTemplateContent = await getAdapterTemplateContent();

  const projectName = await getProjectName();

  const adapterConfig =`{ url: '${await getAdapterConfig()}' }`;

  return `${adapterTemplateContent}
const PROJECT_NAME = '${projectName}';
const adapterConfig = ${adapterConfig};
`;
};

module.exports = { generateCode };
