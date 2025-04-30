**Inicializando nuestro repositorio**
git init 

**Verificamos el estado de los archivos**
git status
git status -s

**Agregamos los archivos al repositorio**
git add <nombrearchivo>
git add .
git add -all

**Agregamos los cambios al repositorio LOCAL y un comentario del cambio**
git commit -m <comentario>

**Subiendo los cambios al repositorio remoto**
git push origin <ramaprincipal>

### Comandos Adicionales
**Configuramos el usuario**
git config user.name
git config user.email
git config user.name"<usuariodegithub>"
git config user.email"<correodegithub>"

**Verificamos si ya hay repositorio remoto**
git remoto -v

**Agregamos repositorio remoto**
git remote add origin <enlacederepositorio>

### COMANDOS SOBRE RAMAS 

**Listamos las ramas del repositorio**
git branch

**Creamos una nueva rama**
git branch <nombredelarama>

**Creamos una rama y a la vez accedemos a ella**
git checkout -b <nombredelarama>

**Cambiamos de rama**
git checkout <rama>