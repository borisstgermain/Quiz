package main

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/urfave/negroni"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc(Routers["Index"], GetIndex).Methods(http.MethodGet)
	r.HandleFunc(Routers["Questions"], GetQuestions).Methods(http.MethodGet)

	n := negroni.Classic()
	n.Use(negroni.NewLogger())
	n.UseHandler(r)

	n.Run(":8081")
}
