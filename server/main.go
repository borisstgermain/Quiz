package main

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/urfave/negroni"
)

func main() {
	r := mux.NewRouter().StrictSlash(true)
	r.Handle(Routers["Index"], http.FileServer(http.Dir("public"))).Methods(http.MethodGet)
	r.HandleFunc(Routers["Questions"], GetQuestions).Methods(http.MethodGet)

	n := negroni.Classic()
	n.Use(negroni.NewLogger())
	n.UseHandler(r)

	n.Run(":8081")
}
