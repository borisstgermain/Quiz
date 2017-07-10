package main

import (
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/urfave/negroni"
)

const URL = "http://db.chgk.info/xml/random"

func actionGetQuestions(w http.ResponseWriter, r *http.Request) {
	c := http.Client{}
	res, err := c.Get(URL)
	if err != nil {
		log.Println(err)
	}
	defer res.Body.Close()

	body, _ := ioutil.ReadAll(res.Body)

	w.WriteHeader(http.StatusOK)
	w.Write(body)
}

func main() {
	r := mux.NewRouter().StrictSlash(true)
	r.Handle("/", http.FileServer(http.Dir("public"))).Methods(http.MethodGet)
	r.HandleFunc("/questions", actionGetQuestions).Methods(http.MethodGet)

	n := negroni.Classic()
	n.Use(negroni.NewLogger())
	n.UseHandler(r)

	n.Run(":8081")
}
