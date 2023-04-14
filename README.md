# Seminario_Racismo_Saude
Este é o repositório do site do Seminário Racismo e Saúde, que pode ser acessado em https://seminarioracismoesaude.uefs.br. ou https://seminario.mbcompany.com.br/ 

Seminário Racismo e Saúde
Este é o repositório do site do Seminário Racismo e Saúde, que pode ser acessado em https://seminarioracismoesaude.uefs.br.

<!-- CONTRIBUTING -->
## Requisitos

Antes de instalar e executar o site do Seminário Racismo e Saúde, você precisará garantir que sua hospedagem atenda aos seguintes requisitos mínimos:

1. Domínio e hospedagem: Você precisará de um domínio e uma hospedagem para o site, que permitam o uso do PHP e do banco de dados MariaDB. Se você não tem um domínio ou uma hospedagem, poderá solicitar esses serviços a um provedor de hospedagem.
2. PHP 7.4 ou superior: O site do Seminário Racismo e Saúde requer o PHP 7.4 ou superior para funcionar corretamente. Você pode verificar qual versão do PHP está instalada em sua hospedagem entrando em contato com o suporte do seu provedor de hospedagem.
3. Wordpress 6.2: O site do Seminário Racismo e Saúde foi desenvolvido usando o Wordpress 6.2. Certifique-se de instalar essa mesma versão do Wordpress em sua hospedagem para garantir a compatibilidade do site.
4. MariaDB 10.6.11 ou superior: O site do Seminário Racismo e Saúde requer o banco de dados MariaDB 10.6.11 ou superior para funcionar corretamente. Você pode verificar qual versão do MariaDB está instalada em sua hospedagem entrando em contato com o suporte do seu provedor de hospedagem.

<p align="right">(<a href="#readme-top"></a>)</p>

<!-- CONTRIBUTING -->
## Instalação do Wordpress

Para instalar o Wordpress em sua hospedagem, siga as seguintes etapas:

1. Baixe a última versão do Wordpress em https://br.wordpress.org/download/.
2. Acesse o painel de controle da sua hospedagem e vá para a seção "Banco de Dados" ou "MySQL".
3. Crie um novo banco de dados e um novo usuário para o Wordpress.
4. Atribua todos os privilégios do banco de dados ao usuário.
5. Faça o upload dos arquivos do Wordpress para o diretório raiz da sua hospedagem. Isso pode ser feito usando o File Manager da hospedagem ou um programa FTP como o FileZilla.
6. Renomeie o arquivo wp-config-sample.php para wp-config.php.
7. Edite o arquivo wp-config.php e adicione as seguintes informações:

7. informações para o banco `wp-config.php`
   ```js
   define('DB_NAME', 'nome_do_seu_banco_de_dados');
   ```
    ```js
   define('DB_USER', 'nome_do_seu_usuario');
   ```
    ```js
   define('DB_PASSWORD', 'senha_do_seu_usuario');
   ```
    ```js
   define('DB_CHARSET', 'utf8mb4');
   ```
    ```js
   define('DB_COLLATE', '');
   ```


8. Substitua nome_do_seu_banco_de_dados, nome_do_seu_usuario e senha_do_seu_usuario pelos dados de seu banco de dados e usuário criados na etapa 3.
9. Salve o arquivo wp-config.php.
10. Acesse o endereço do seu site e siga as instruções para concluir a instalação.

<p align="right">(<a href=""></a>)</p>

## Migração do site

O site do Seminário Racismo e Saúde foi migrado utilizando o plugin All-in-One WP Migration. Para migrar o site para sua hospedagem, siga estas etapas:

1. Baixe o arquivo de backup do site do Seminário Racismo e Saúde a partir do seguinte link do Google Drive: https://drive.google.com/drive/folders/150o5UylLrz_oMUyCjJBN8_VwmMdf3XUm?usp=sharing.
2. Instale o Wordpress 6.2 em sua hospedagem seguindo as etapas descritas acima.
3. Instale o plugin All-in-One WP Migration no seu site Wordpress recém-instalado.
4. Selecione a função "Importar" do plugin All-in-One WP Migration.
5. Selecione a função "Arquivo" e carregue o arquivo de backup que você baixou do Google Drive.
6. Aguarde a importação ser concluída.
7. Depois que a importação for concluída, você deve ter todos os dados do site do Seminário Racismo e Saúde em sua hospedagem.

## Migração do site

Ao seguir estas etapas, você deverá ser capaz de instalar e executar o site do Seminário Racismo e Saúde em sua hospedagem. Se você tiver algum problema ou dúvida durante o processo de instalação ou migração, entre em contato com o suporte do seu provedor de hospedagem para obter assistência adicional.
