function mod({ participants, sports }) {
  /*
  Подробно оператору new создает экземпляр объекта,
  используя функцию-конструктор и параметры для неё
  */
  function constructFrom(fnConstructor, ...params) {
    const res = {};
    fnConstructor.bind(res).call(params);
    Object.setPrototypeOf(res, fnConstructor);
    return res;
  }
  
  /*
  Создает пары вида ['вид спорта', 'имя участника'],
  где первому виду спорта соответствует последний участник
  */
  function assignParticipants() {
    const participants = this.participants;
    const sports = this.sports;
    const orderIndexes = [];
    let i = sports.length;
    
    while (i--) {
      orderIndexes.push(function () {
        return i;
      });
    }
    return orderIndexes.map(
      (getSportIndex, i) => [sports[i], participants[getSportIndex()]]
    );
  }
  
  function Contest(participants, sports) {
    this.participants = participants;
    this.sports = sports;
  }
  
  Contest.prototype.assignParticipants = assignParticipants;
  const contest = constructFrom(Contest, participants, sports);
  return contest.assignParticipants();
}

// Входные данные:
// { participants: ['Kate', 'Artyom'],  sports: ['hockey', 'football'] }

// Ожидаемый результат:
// [['hockey', 'Artyom'], ['football', 'Kate']]
