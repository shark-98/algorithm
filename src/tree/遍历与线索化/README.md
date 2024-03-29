# 遍历与线索化

---
> 前序遍历
  - 根、左、右
> 中序遍历
  - 左、根、右
> 后序遍历
  - 左、右、根
> 作用：序列化
  - 恢复方式：中 + 前、中 + 后。
    - 前 + 后，不能恢复一棵树。因为没有办法区分左、右子树的节点数量。
    - 只有含有中序遍历，任意结合另一种可以恢复。因为中序可以确定左、右子树。
  - 举例：为了数据的传输。先存储这棵树的两种遍历方式的数据；需要使用的时候再根据两种遍历方式以及对应的数据还原出这棵树。

---
> 线索化
  - 作用：废物利用（叶子节点的左、右节点指向都是空的）。
  - 前序遍历线索化、中序遍历线索化、后序遍历线索化
  - 左边空指针 -> 前驱，右边空指针 -> 后继（变的像链表结构一样，使遍历更加简单）
