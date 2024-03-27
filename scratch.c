#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define FILENAME "enroll.txt"
#define N 40

typedef struct student {
   int id;
   char name[10];
}student;

student enroll[N];
int length = 0;
void doRequest(char);
int drop(int);

int apply(student s) {
   // 아이디랑 이름을 배열안에 넣기 정렬?
    for(int i=0; i<N; ++i){
        enroll[i] = s;
    }
    // 정렬 -> insertion, Bubble, selection, quick, merge, 
    int i, j;
    student temp;
    for (i = 0; i < N - 1; i++){
        // Last i elements are already
        // in place
        for (j = 0; j < N - i - 1; j++){
            if (enroll[j].id > enroll[j + 1].id){
                temp = enroll[i];
                enroll[i] = enroll[j];
                enroll[j] = temp;
            }
        }
    }
    return 0;
}

void save(void) {
  FILE* f1;
  int i;
  f1 = fopen(FILENAME, "w");
  for (i = 0; i <= length; i++) {
      fprintf(f1, "%d %s\n", enroll[i].id, enroll[i].name);
  }
  fclose(f1);
}

void load(void) {
  FILE* f1;
  int i = 0;
  f1 = fopen(FILENAME, "r");
  while (fscanf(f1, "%d %s",
      &enroll[i].id, enroll[i].name) != EOF)
      i++;
  length = i;
  fclose(f1);
}


int main() {
   int id;
   char ch;
   load();

   do {
      system("cls");
      printf("\n--------------------------------\n");
      printf("   자료구조 수강신청 및 수강철회 \n");
      printf("\n--------------------------------\n");
      printf("   1. 수강신청('1') \n");
      printf("   2. 수강철회('2') \n");
      printf("   3. 수강조회('3') \n");
      printf("   4. 종    료('q') \n");
      printf("\n--------------------------------\n");
      printf("\n\n 원하시는 서비스를 선택하세요. ");
      ch = getchar(); 
      doRequest(ch);
      printf("\n\n 임의의 키를 눌러 주세요");
      getchar();
   } while (ch != 'q');
}

void doRequest(char ch) {
   struct student s;
   int flag;
   switch (ch) {
   case '1': system("cls");
      printf(" \n\n ** 수강신청 처리중 **\n");
      printf(" \n 학번: "); scanf("%d", &s.id);
      printf(" \n 이름: "); scanf("%s", s.name);
      flag = apply(s);
      if (flag == 0) printf(" \n\n 수강신청 마감됨. \n\n");
      else printf(" \n\n 수강신청 승인했음! \n\n");
      break;
   case '2': system("cls");
      printf(" \n\n ** 수강철회 처리중 **\n");
      printf(" \n 학번: ");   scanf("%d", &s.id);
      flag = drop(s.id);
      if (flag == 0)   printf(" \n\n 수강신청 정보없음! \n\n");
      else printf(" \n\n 신청철회 승인했음! \n\n");
      break;
   case '3': printf("1234");
      break;
   case 'q': system("cls"); save();
      printf(" \n\n 프로그램 종료 \n\n"); break;
   default: system("cls"); printf("\n\n 잘못 입력했음. \n");
      printf("'1'~'3' 또는 'q'를 입력해야 함 \n\n");
   }
}

int drop(int a){
    
   return -1; 
}