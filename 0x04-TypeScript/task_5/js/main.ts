interface  MajorCredits{
credits: number;
}

interface  MinorCredits{
credits: number;
}

interface Major extends MajorCredits{
  credits: number;
}

interface Minor extends MinorCredits{
  credits: number;
}

function sumMajorCredits(subject1: Major, subject2: Major): Major {
  return {
    credits: subject1.credits + subject2.credits
  }
}
 function sumMinorCredits(subject1: Minor, subject2: Minor): Minor {
  return {
    credits: subject1.credits + subject2.credits
  }
}