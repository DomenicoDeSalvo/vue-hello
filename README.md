INTRODUZIONE A VUE

Vue è un framework di JavaScript designato per essere flessibile alle esigenze dello sviluppatore che, a partire da file HTML, CSS e JS, lo aiuta  nella creazione di interfacce utente.
Le sue due caratteristiche principali sono: il Rendering Dichiarativo che permettere di scrivere nel HTML partendo da dati inseriti in JS e la reattività che permette l'aggiornamento rapido e automatico del DOM quando vengono apportate modifiche al file JS. 
Grazie a questo framework è possibile lavorare utilizzando un singolo file chiamato “Single-File components” (SFC) anziché 3 file separati per HTML, CSS e JS.
Quando si lavora con Vue si può scegliere tra due stili di componenti: Option API,  più semplice da usare basato su modelli di linguaggio orientati agli oggetti e Composition API, che richiede la conoscenza di come la reattività funzioni con il modello Vue ma che in cambio dà più flessibilità.

TEMPLATE

Interpolazione del testo: inserendo una proprietà al centro di due coppie di parentesi graffe, essa verrà rimpiazzata nel documento dal valore che è stato attribuito alla suddetta proprietà.

Direttive: sono attributi speciali di Vue contraddistinte dal prefisso “v-”. Il loro compito è quello di modificare il DOM ogniqualvolta i valori delle proprietà a cui sono collegate cambiano.

v-html: da utilizzare per fare sì che il valore della proprietà venga considerato come HTML e non come una semplice stringa.

V-bind: da utilizzare quando vogliamo che il valore della proprietà venga usato per dare un attributo a una classe o un ID dell'HTML. Può essere abbreviato con i due punti.