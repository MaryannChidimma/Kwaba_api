
interface ISavingPlan {
    title: string
    numberOfBuddies: number
    savingFrequency: string,
    specifyTarget: string,
    yearlyTarget: number,
    savingmethod: string,
    relationshipWithBuddies: string
    invitedBuddies: [],
    startDate: Date,
    enddate: Date
  }
  
  export {
   ISavingPlan,
  };
  