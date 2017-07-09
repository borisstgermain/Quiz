package main

import (
	_ "fmt"
	"io/ioutil"
	"log"
	"net/http"
)

const URL = "http://db.chgk.info/xml/random"

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		content, err := ioutil.ReadFile("./public/index.html")
		if err != nil {
			log.Println(err)
			w.WriteHeader(http.StatusNotFound)
			return
		}

		w.Write(content)
	})

	http.HandleFunc("/api/quiz/", func(w http.ResponseWriter, r *http.Request) {
		c := http.Client{}
		res, err := c.Get(URL)
		if err != nil {
			log.Println(err)
		}
		defer res.Body.Close()

		body, _ := ioutil.ReadAll(res.Body)

		w.WriteHeader(http.StatusOK)
		w.Write(body)
	})

	log.Fatal(http.ListenAndServe(":8081", nil))
}
