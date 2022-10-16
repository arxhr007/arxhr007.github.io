substrs=["mv","cp","rm","touch","rename","mkdir","rmdir","chmod"]
his=[]
function send(a){
    var data = { "message":a};
    var options={
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
      };
    fetch('https://telemessage.herokuapp.com',options)
  }
$('body').terminal(
    function(command) {
        his.push(command)
        if (command.startsWith("echo"))
            this.echo(command.substring(5))
        else if (command == "ls")
            this.echo('\nme.txt anime.txt social_medias.txt sendmessage\n')
        else if (command.startsWith("cat ")){
            if (command == "cat me.txt"){
                this.echo("\nName: Aaron Thomas")
                this.echo("Age: 17")
                this.echo("Place: Kerala,India")
                this.echo("mbti: INTP")
                this.echo("Relationship Status : Single af 🥲")
                this.echo("Life goal : Nothing in particular, Just want a normal life ;)\n")
                this.echo("I like star-gazing , Anime , deep conversations\n")
            }
            else if (command=="cat anime.txt"){
                this.echo("\nFavorite Anime: One piece , Naruto , Black Clover")
                this.echo("Favorite Character: Roronoa Zoro (One piece)")
                this.echo("Favorite Antagonist: Johan Liebert (Monster)")
                this.echo("Favorite Genre: Slice of life , Mystery ")
                this.echo("Recommend me an Anime by executing \"./sendmessage\" ;)\n")
            }
            else if (command=="cat social_medias.txt"){
                this.echo("\nGithub:")
                this.echo("[[!bg;yellow;black]https://github.com/arxhr007]\n")
                this.echo("Instagram:")
                this.echo("[[!bg;yellow;black]https://www.instagram.com/_arxhr007_]\n")

            }
            else if (command == "cat *"){
                this.echo("\nName: Aaron Thomas")
                this.echo("Age: 17")
                this.echo("Place: Kerala,India")
                this.echo("mbti: INTP")
                this.echo("Relationship Status : Single af 🥲")
                this.echo("Life goal : Nothing in particular, Just want a normal life ;)\n")
                this.echo("I like star-gazing , Anime , deep conversations\n")
                this.echo("\nGithub:")
                this.echo("[[!bg;yellow;black]https://github.com/arxhr007]\n")
                this.echo("Instagram:")
                this.echo("[[!bg;yellow;black]https://www.instagram.com/_arxhr007_]\n")
                this.echo("\nFavorite Anime: One piece , Naruto , Black Clover")
                this.echo("Favorite Character: Roronoa Zoro (One piece)")
                this.echo("Favorite Antagonist: Johan Liebert (Monster)")
                this.echo("Favorite Genre: Slice of life , Mystery ")
                this.echo("Recommend me an Anime by executing \"./sendmessage\" ;)\n")
            }
            else
                this.echo('[[!b;red;black]cat: '+command.substring(5)+': No such file or directory')
        }
        else if (command == "history"){
            for (i = 0; i < his.length; i++)
                this.echo(his[i])

              
        }
        else if (command.startsWith("sudo ") || command.startsWith("su "))
            this.echo("Really buddy? You need root?")
        else if (command == "pwd")
            this.echo("/home/Aaron")
        else if (substrs.some(substr => command.startsWith(substr)))
            this.echo("This is read only")
        else if (command.startsWith("cd "))
            this.echo('[[b;red;black]bash: cd: '+command.substring(5)+': No such file or directory]')
        else if (command == "./sendmessage"){
                this.push(function(command) {
                    send(command)
                    this.echo("Done!")
                    this.pop()
                },
                {
                    prompt: "message: "
                })
        }
        else if (command=="exit")
            this.echo("There is no escape ! hehe")
        else if (command=="help" || command=="h"){
            this.echo("\nls - to list all files")
            this.echo("./sendmessage - to send me a secret message ;)")
            this.echo("cat - to read a file")
            this.echo("pwd - to print current directory")
            this.echo("history - to see history of commands")
            this.echo("clear - to clear screen")
            this.echo("help -  to see this\n")

        }

        else
            this.echo("[[!b;red;black]"+command+": command not found]")

}, {
	greetings: 

    '░█▀▀█ ▒█▀▀█ ▀▄▒▄▀ ▒█░▒█ ▒█▀▀█ █▀▀█ █▀▀█ ▀▀▀█ \n'+
    '▒█▄▄█ ▒█▄▄▀ ░▒█░░ ▒█▀▀█ ▒█▄▄▀ █▄▀█ █▄▀█ ░░█░ \n'+
    '▒█░▒█ ▒█░▒█ ▄▀▒▀▄ ▒█░▒█ ▒█░▒█ █▄▄█ █▄▄█ ░▐▌░\n\n'+
    'Type "help" or \'h\'            0x4141524F4E\n',
    prompt: 'arn@ARXHR007:~$',
    name: 'ARXHR007'
});
