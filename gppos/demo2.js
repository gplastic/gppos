var con = new SimpleConsole({
	handleCommand: handle_command,
	placeholder: "Enter Javascript for now, do homework later",
	storageID: "simple-console demo"
});
document.body.appendChild(con.element);

con.logHTML(
	"<h1>GPPOS</h1>" +
	(location.pathname.match(/tilde|backtick|quake/i) ? "" : "")
);

function handle_command(command){
	// Conversational trivialities
	
	if(command.match(/^((Well|So|Um|Uh),? )?(Hi|Hello|Hey|Greetings|Hola)/i)){
		con.log((command.match(/^[A-Z]/) ? "Hello" : "hello") + (command.match(/\.|!/) ? "." : ""));
	}else if(command.match(/^((Well|So|Um|Uh),? )?(What'?s up|Sup)/i)){
		con.log((command.match(/^[A-Z]/) ? "Not much" : "not much") + (command.match(/\?|!/) ? "." : ""));
	}else if(command.match(/^(>?[:;8X][-o ]?[O03PCDS\\/|()[\]{}])$/i)){
		log_emoticon(command, +1);
	}else if(command.match(/^([O03PCDS\\/|()[\]{}][-o ]?[:;8X]<?)$/i)){
		log_emoticon(command, -1);
	}else if(command.match(/^<3$/i)){
		con.log("❤");
	// Unhelp
	}else if(command.match(/^(!*\?+!*|(please |plz )?(((I )?(want|need)[sz]?|display|show( me)?|view) )?(the |some )?help|^(gimme|give me|lend me) ((the |some )?)help| a hand( here)?)/i)){ // overly comprehensive, much?
		con.log("I could definitely help you if I wanted to.");
	}else{
		var err;
		try{
			var result = eval(command);
		}catch(error){
			err = error;
		}
		if(err){
			con.error(err);
		}else{
			con.log(result).classList.add("result");
		}
	}
};
