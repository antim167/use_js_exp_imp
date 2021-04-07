//creat class 
//default export
export default class FileE {
    //1.property
    f = [
        {
            name: "antimm",
            l: 22,
            geta:  function() {
                return this.l;
            }
        }
    ];
    //2.constructor


    //3.methods

    get() {
        var k = this.f[0].geta();
        return k;
    }
}