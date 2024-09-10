#include<bits/stdc++.h>
using namespace std;
int gcd(int a,int b,int &x,int &y){
if(a==0){
x=0;
y=1;
return b;
}
int x1,y1;
int gcd1=gcd(b%a,a,x1,y1);
x=y1-(b/a)*x1;
y=x1;
return gcd1;
}
int main(){
int x,y;
cout<<"Enter Number of Testcases: ";
int t;cin>>t;
while(t--){
cout<<"Enter Two Numbers a "<<endl;
int a;cin>>a;
cout<<"Enter Two Numbers b "<<endl;
int b;cin>>b;
if(b>a) swap(a,b);
int x,y;
cout<<"GCD of "<<a<<" , "<<b<<" is "<<gcd(a,b,x,y)<<endl;
}
}