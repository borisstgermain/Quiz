package main

import (
	"io/ioutil"
	"log"
	"net/http"
)

const GET_QUESTIONS_URL = "http://db.chgk.info/xml/random"

func GetQuestions(w http.ResponseWriter, r *http.Request) {
	c := http.Client{}
	res, err := c.Get(GET_QUESTIONS_URL)
	if err != nil {
		log.Println(err)
	}
	defer res.Body.Close()

	body, _ := ioutil.ReadAll(res.Body)

	w.WriteHeader(http.StatusOK)
	w.Write(body)
}
