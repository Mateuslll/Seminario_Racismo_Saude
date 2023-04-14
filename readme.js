# Seminario_Racismo_Saude
Este é o repositório do site do Seminário Racismo e Saúde, que pode ser acessado em https://seminarioracismoesaude.uefs.br. ou https://seminario.mbcompany.com.br/ 

Seminário Racismo e Saúde
Este é o repositório do site do Seminário Racismo e Saúde, que pode ser acessado em https://seminarioracismoesaude.uefs.br.

Requisitos

Domínio e hospedagem já foram solicitados.
PHP 7.4 ou superior.
Wordpress 6.2.
MariaDB 10.6.11 ou superior.
Instalação do Wordpress
Para instalar o Wordpress na sua hospedagem, siga os seguintes passos:

Baixe a última versão do Wordpress em https://br.wordpress.org/download/.

Acesse o painel de controle da sua hospedagem e vá para a seção "Banco de Dados" ou "MySQL".
Crie um novo banco de dados e um novo usuário para o Wordpress.
Atribua todos os privilégios do banco de dados ao usuário.
Faça o upload dos arquivos do Wordpress para o diretório raiz da sua hospedagem. Isso pode ser feito usando o File Manager da hospedagem ou um programa FTP como o FileZilla.
Renomeie o arquivo wp-config-sample.php para wp-config.php.
Edite o arquivo wp-config.php e adicione as seguintes informações:

define('DB_NAME', 'nome_do_seu_banco_de_dados');
define('DB_USER', 'nome_do_seu_usuario');
define('DB_PASSWORD', 'senha_do_seu_usuario');
define('DB_HOST', 'localhost');
define('DB_CHARSET', 'utf8mb4');
define('DB_COLLATE', '');

Substitua nome_do_seu_banco_de_dados, nome_do_seu_usuario e senha_do_seu_usuario pelos dados de seu banco de dados e usuário criados na etapa 3.

Salve o arquivo wp-config.php.
Acesse o endereço do seu site e siga as instruções para concluir a instalação.

Migração do site
O site do Seminário Racismo e Saúde foi migrado utilizando o plugin All-in-One WP Migration. Para migrar o site para sua hospedagem, siga estas etapas:

Baixe o arquivo de backup do site do Seminário Racismo e Saúde a partir do seguinte link do Google Drive: https://drive.google.com/drive/folders/150o5UylLrz_oMUyCjJBN8_VwmMdf3XUm?usp=sharing.
Instale o Wordpress 6.2 em sua hospedagem seguindo as etapas descritas acima.
Instale o plugin All-in-One WP Migration no seu site Wordpress recém-instalado.
Selecione a função "Importar" do plugin All-in-One WP Migration.
Selecione a função "Arquivo" e carregue o arquivo de backup que você baixou do Google Drive.
Aguarde a importação ser concluída.
Depois que a importação for concluída, você deve ter todos os dados do site do Seminário Racismo e Saúde em sua hospedagem.
Conclusão
Ao seguir estas etapas, você deverá ser capaz de instalar e executar o site do Seminário Racismo e Saúde em sua hospedagem. Se você tiver algum problema ou dúvida durante o processo de instalação ou migração, entre em contato com o suporte do seu provedor de hospedagem para obter assistência adicional.
