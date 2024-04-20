
    // Fonction pour envoyer une requête à l'API d'OpenAI
    async function sendRequestToOpenAI(userInput) {
        //const API_KEY = '';

        const apiUrl = 'https://api.openai.com/v1/chat/completions';

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userInput }],
                max_tokens: 100
            })
        });

        const data = await response.json();
        return data.choices["0"].message; // Récupérer le texte de la réponse
    }

    // Fonction pour gérer la réception de la réponse de l'API
    async function handleApiResponse(userInput) {
        try {
            const response = await sendRequestToOpenAI(userInput);
            console.log('La reponse de l\'API OpenAI est :',response.content);
            // Ici vous pouvez traiter la réponse comme vous le souhaitez, par exemple l'afficher dans le chat
        } catch (error) {
            console.error('Erreur lors de la requête à l\'API OpenAI :', error);
        }
    }

    // Exemple d'utilisation : appeler la fonction handleApiResponse avec le texte de l'utilisateur
    const userInput = "Bonjour, comment code un bouton ?";
    handleApiResponse(userInput);





