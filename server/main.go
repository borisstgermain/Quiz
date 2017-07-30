package main

import (
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/urfave/negroni"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8081"
	}

	r := mux.NewRouter()
	r.Handle("/", http.FileServer(http.Dir("public"))).Methods(http.MethodGet)
	r.HandleFunc("/questions", GetQuestions).Methods(http.MethodGet)

	n := negroni.Classic()
	n.Use(negroni.NewLogger())
	n.UseHandler(r)

	n.Run(":"+port)
}
