1.	Verify if master is in clean state.
$ git status

2.	Create a branch “GitWork”. Add a file “hello.xml”.
$ git branch GitWork
$ git checkout GitWork

3.	Update the content of “hello.xml” and observe the status

4.	Commit the changes to reflect in the branch
$ git add .
$ git commit -m "commit msg"

5.	Switch to master.
$ git checkout master

6.	Add a file “hello.xml” to the master and add some different content than previous.

7.	Commit the changes to the master
$ git add .
$ git commit -m "commit msg"

8.	Observe the log by executing “git log –oneline –graph –decorate –all”
$ git log --oneline --graph --decorate --all

9.	Check the differences with Git diff tool
$ git diff main..GitWork

10.	For better visualization, use P4Merge tool to list out all the differences between master and branch
$ git difftool main..GitWork

11.	Merge the bran to the master
$ git merge GitWork

12.	Observe the git mark up.

13.	Use 3-way merge tool to resolve the conflict
$ git mergetool

14.	Commit the changes to the master, once done with conflict
After resolving the conflicts in the p4Merge merge interface
$ git commit "fix merge conflict"

15.	Observe the git status and add backup file to the .gitignore file.
As I have set the mergetool.keepBackup false, so no backup file has been created

16.	Commit the changes to the .gitignore

17.	List out all the available branches
$ git branch

18.	Delete the branch, which merge to master.
$ git branch -d GitWork

19.	Observe the log by executing “git log –oneline –graph –decorate”
$ git log --oneline --graph --decorate --all