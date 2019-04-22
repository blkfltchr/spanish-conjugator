const Query = {
    test(parent, args, { db }, info) {
        console.log("Db =>", db)
        return db
    },
  };
  
  export { Query as default };
  