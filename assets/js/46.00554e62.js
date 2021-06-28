(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{405:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"lab-9-clustering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lab-9-clustering"}},[t._v("#")]),t._v(" Lab 9: Clustering")]),t._v(" "),a("h2",{attrs:{id:"objective"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[t._v("#")]),t._v(" Objective")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("To implement "),a("em",[t._v("k")]),t._v("-means clustering algorithm using basic Python.")])]),t._v(" "),a("li",[a("p",[t._v("To perform "),a("em",[t._v("k")]),t._v("-means clustering algorithm with "),a("code",[t._v("scikit-learn")]),t._v(" Python library.")])])]),t._v(" "),a("h2",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[t._v("#")]),t._v(" Note")]),t._v(" "),a("ol",[a("li",[t._v("Suggestion: use "),a("code",[t._v("numpy")]),t._v(" library to simplify the operation.")])]),t._v(" "),a("h2",{attrs:{id:"k-means-clustering-using-basic-python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#k-means-clustering-using-basic-python"}},[t._v("#")]),t._v(" "),a("em",[t._v("k")]),t._v("-means clustering using basic Python")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("The following code structure will be used for this section:")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# import libraries")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# functions")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## function to take input of data and number of clusters, return centroids and other data")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_random_centroids")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data_points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n_centroids"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## function to group data according to centroids")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("group_to_centroids")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data_points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" centroids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## function to calculate centroids from grouped data")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find_centroids")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data_points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" groups"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# generate dataset")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# identify initial centroids")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# repeat until centroids stabilise")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## group data to centroids")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## update centroids")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'terminated'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"dataset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataset"}},[t._v("#")]),t._v(" Dataset")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("The code in this subsection will populate")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# generate dataset")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("We will create a dataset of 200 with 2 input features and 4 clusters.")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sklearn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasets "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" make_blobs\ndata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" make_blobs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n_samples"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n_features"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" centers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cluster_std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" random_state"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("data")]),t._v(" is an array of two elements. First element contains the data points, and second element contains the index of the cluster.")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("points "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("Plot the data on a scatter graph with colour representing the cluster of the points.")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyplot "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"initialisation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialisation"}},[t._v("#")]),t._v(" Initialisation")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("The initialisation for "),a("em",[t._v("k")]),t._v("-means clustering algorithm involves the identification of "),a("em",[t._v("k")]),t._v(" random points from the dataset.")])]),t._v(" "),a("li",[a("p",[t._v("In the "),a("code",[t._v("get_random_centroids")]),t._v(" function, pass the dataset and the number of centroids to be identified as the input arguments.")])]),t._v(" "),a("li",[a("p",[t._v("In the body of the function, randomly identify the centroids from the dataset.")])]),t._v(" "),a("li",[a("p",[t._v("The function should return two outputs, the randomly identified centroids and the dataset without the centroids.")])]),t._v(" "),a("li",[a("p",[t._v("Update your code with the following snippet:")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# identify initial centroids")]),t._v("\ncentroids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" others "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get_random_centroids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"cluster-the-points"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-the-points"}},[t._v("#")]),t._v(" Cluster the points")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("The "),a("code",[t._v("group_to_centroids")]),t._v(" function takes two inputs, the data points to be clustered and the centroids to cluster to.")])]),t._v(" "),a("li",[a("p",[t._v("In the "),a("code",[t._v("group_to_centroids")]),t._v(" function, calculate the distance of every point from each centroid.")])]),t._v(" "),a("li",[a("p",[t._v("Then identify the centroid each point should be clustered to.")])]),t._v(" "),a("li",[a("p",[t._v("The function should return the index of the centroid each point is clustered to.")])]),t._v(" "),a("li",[a("p",[t._v("Update your code with the following snippet:")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## group data to centroids")]),t._v("\ngroups "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" group_to_centroids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("others"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" centroids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"update-the-centroids"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-the-centroids"}},[t._v("#")]),t._v(" Update the centroids")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("The "),a("code",[t._v("find_centroids")]),t._v(" function takes two inputs, the data points and the index of the centroid each point is clustered to (i.e. output of "),a("code",[t._v("group_to_centroids")]),t._v(")")])]),t._v(" "),a("li",[a("p",[t._v("The "),a("code",[t._v("find_centroids")]),t._v(" function calculates and returns the new set of centroids based on the clustered data points.")])]),t._v(" "),a("li",[a("p",[t._v("Update your code with the following snippet:")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## update centroids")]),t._v("\ncentroids "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" find_centroids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("others"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" groups"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"termination-condition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#termination-condition"}},[t._v("#")]),t._v(" Termination condition")]),t._v(" "),a("ol",[a("li",[t._v("The clustering algorithm should terminate when the centroids stabilise, i.e. do not change much.")])]),t._v(" "),a("h3",{attrs:{id:"visualisation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visualisation"}},[t._v("#")]),t._v(" Visualisation")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Update your code according to the following sample to visualise the centroids and clusters at every iteration.")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("fig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" plt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("figure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nax "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_subplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# repeat until centroids stabilise")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## group data to centroids")]),t._v("\n  groups "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" group_to_centroids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("others"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" centroids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## update centroids")]),t._v("\n  centroids "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" find_centroids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("others"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" groups"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## visualise current clusters and centroids")]),t._v("\n  ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("others"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" others"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("groups"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("centroids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" centroids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" marker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'k'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## pause for one second")]),t._v("\n  plt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pause"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("Are Figure 1 (originally generated clusters) and Figure 2 (calculated clusters) identical?")])])]),t._v(" "),a("h2",{attrs:{id:"k-means-clustering-using-scikit-learn-python-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#k-means-clustering-using-scikit-learn-python-library"}},[t._v("#")]),t._v(" "),a("em",[t._v("k")]),t._v("-means clustering using "),a("code",[t._v("scikit-learn")]),t._v(" Python library")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("The following code structure will be used for this section:")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# import libraries")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# generate dataset")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# initialise the k-means model")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# train the k-means model")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# identify the cluster of each point")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# visualise the result")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"dataset-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataset-2"}},[t._v("#")]),t._v(" Dataset")]),t._v(" "),a("ol",[a("li",[t._v("We will use the exact same data generation as the previous section.")])]),t._v(" "),a("h3",{attrs:{id:"k-means-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#k-means-model"}},[t._v("#")]),t._v(" k-means model")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("The "),a("em",[t._v("k")]),t._v("-means model is provided by "),a("code",[t._v("sklearn.cluster.KMeans")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sklearn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cluster "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" KMeans\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("Initialise the "),a("em",[t._v("k")]),t._v("-means model with 4 clusters using "),a("code",[t._v("KMeans")]),t._v(". (Check the documentation to identify the usage of "),a("code",[t._v("KMeans")]),t._v(")")])])]),t._v(" "),a("h3",{attrs:{id:"training"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#training"}},[t._v("#")]),t._v(" Training")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("The "),a("em",[t._v("k")]),t._v("-means model initialised need to be trained with the data.")])]),t._v(" "),a("li",[a("p",[t._v("The training is executed using "),a("code",[t._v("sklearn.cluster.KMeans.fit")]),t._v(". (Identify the input argument(s))")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("kmeans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"cluster-the-points-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-the-points-2"}},[t._v("#")]),t._v(" Cluster the points")]),t._v(" "),a("ol",[a("li",[t._v("The trained model can be used to cluster the points to their respective cluster using "),a("code",[t._v("sklearn.cluster.KMeans.fit_predict")]),t._v(". (Identify the input argument(s))"),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("y_km "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" kmeans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fit_predict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"visualisation-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visualisation-2"}},[t._v("#")]),t._v(" Visualisation")]),t._v(" "),a("ol",[a("li",[t._v("The visualisation of the result can be achieved with the following code:"),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("plt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("figure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("y_km"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kmeans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cluster_centers_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kmeans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cluster_centers_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'k'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])]),t._v(" "),a("p",[a("strong",[t._v("Task")]),t._v(": Compare the results of the two methods, are they similar?")])])}),[],!1,null,null,null);s.default=e.exports}}]);