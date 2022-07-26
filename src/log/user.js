class User{
    constructor(id, nom,prenom,mdp,tel,email) {
      this.id = id;
      this.nom=nom;
      this.prenom=prenom;
      this.email=email;
      this.tel=tel;
      this.mdp=mdp;
    }
    
  getid() {
    return this.id;
  }
  getnom() {
    return this.nom;
  }
  getprenom() {
    return this.prenom;
  }
  getmdp() {
    return this.mdp;
  }
  getemail() {
    return this.email
  }
  gettel(){
    return this.tel;
  }
  setid(id) {
    this.id = id;
  } 
  setname(name) {
    this.name = name;
  } 
  setprenom(prenom) {
    this.prenom = prenom;
  } 
  setemail(email) {
    this.email= email;
  }
   settel(tel) {
    this.tel = tel;
  }
  setmdp(mdp) {
    this.mdp=mdp;
  }
  }