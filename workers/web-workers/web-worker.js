// self.addEventListener('message', (ev) => {
self.onmessage =  function(ev) {    
    console.log('Web worker started with data: ' + ev.data);
    let data = ev.data.do;
    switch(data) {
/*        case 'Get started':
            self.postMessage('Web worker started');
            break;
        case 'Other':
            self.postMessage('Other task...');                
            break;*/
        case 'fetch':
            let url = 'http://jsonplaceholder.typicode.com/posts';
            fetch(url)
            .then(response => response.json())
            .then(data => {
                self.postMessage(data);
            })
            .catch(err => console.log(err));            
            break;
        default:
            console.log('Invalid access');
            self.postMessage('Closing web worker');
            self.close();
    }
};
