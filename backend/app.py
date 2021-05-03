from flask import Flask
import pickle
from flask import request
# import h5py
import numpy as np
# import tensorflow
from tensorflow.python import keras
from tensorflow.python.keras.models import load_model
from flask_cors import CORS

#pip install -U pip setuptools wheel
#pip install -U spacy
#python -m spacy download en_core_web_sm
import spacy
# import tqdm
import en_core_web_sm

app=Flask(__name__)
CORS(app)


@app.route('/api',methods=['POST'])

def api():

    print("Hello")
    result = {'Neural_Nets':"","Naive_Bayes":"","Logistic_Regression":""}
    text=request.json
    text = text['question']

    nlp = en_core_web_sm.load()

    model = load_model("model_cv2.h5")
    model_lr = pickle.load(open("LR_bow.sav","rb"))
    model_nb = pickle.load(open("MultinomialNB_bow.sav","rb"))
    print("Loaded model@!")

    prediction_lr= model_lr.predict(request.json)
    result['Logistic_Regression'] = "SINCERE" if (prediction_lr == 0) else "INSINCERE"
    print(prediction_lr)

    prediction_nb = model_nb.predict(request.json)
    result['Naive_Bayes'] = "SINCERE" if (prediction_nb == 0) else "INSINCERE"
    print(prediction_nb)

    
    print("Got TEXT",text)

    # getting vocab_freq, its word2index and  its lemma_dict convertion
    vocab_freq = {}
    word2index = {}
    lemma_dict = {}

    word_sequences = []
    word_seq = []
    for token in nlp(text):
        if token.is_punct or token.is_space:
            continue
        try:
            vocab_freq[token.text] += 1
        except KeyError:
            vocab_freq[token.text] = 1
        if token.text not in word2index:
            word2index[token.text] = len(vocab_freq)
            lemma_dict[token.text] = token.lemma_
        word_seq.append(word2index[token.text])
    word_sequences.append(word_seq)

    vocab_size = len(word2index)

    #pass word_sequences in predict
    X_test_data = keras.preprocessing.sequence.pad_sequences(word_sequences, maxlen=100)
    prediction= model.predict(X_test_data)
    print(prediction)
    if(prediction>0.04):
        result['Neural_Nets']="INSINCERE"
    else:
        result['Neural_Nets']="SINCERE"

    return result
    
   