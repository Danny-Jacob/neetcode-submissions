class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.length()!=t.length()){
            return false;
        }
        int hash1[26]={0};
        for(int i=0;i<s.length();i++){
            hash1[s[i]-'a']++;
            hash1[t[i]-'a']--;
        }
        for(int i=0;i<26;i++){
            if(hash1[i]!=0){
                return false;
            }
            
        }
        return true;
        
    }
    
};
