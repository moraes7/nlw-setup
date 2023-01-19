const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);

const data = {
    run: ['01-01', '01-03', '01-05', '01-07'],
    gym: ['01-02', '01-04', '01-06'],
    water: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'],
    food: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'],
    sleep: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'],
    study: ['01-02', '01-03', '01-04', '01-05', '01-06']
}

nlwSetup.setData(data);
nlwSetup.load();