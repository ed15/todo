class Nota
{
    constructor(data)
    {
        this.guid = data.guid;
        this.txt1 = data.txt1;

    }

    getNota()
    {
        return [
                  this.guid,
                  this.txt1
        ];
    }
}
module.exports = {Nota};
