job("React Start!") {
    container("node:alpine") {
         shellScript {
             interpreter = "/bin/sh"
            content = """
                npm install craco
                yarn start
            """
        }
    }
}