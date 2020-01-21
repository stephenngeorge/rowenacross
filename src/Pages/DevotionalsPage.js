import React from 'react'

import { Article } from '../library'
import { ArticleData } from '../library/data'

const DevotionalsPage = () => (
  <>
    <Article { ...ArticleData }>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus sed ipsum vitae ante pulvinar rutrum at eget ligula. 
        Nullam blandit dapibus pharetra. Nulla vitae pretium diam. 
        Pellentesque vehicula neque faucibus eros scelerisque auctor. 
        Etiam nisi turpis, bibendum ac turpis ac, cursus commodo tortor. 
        Donec at pretium odio, vel vestibulum justo. Quisque sed ornare dui.
      </p>
      <p>
        Aliquam risus orci, consequat sit amet luctus in, mattis et arcu. 
        Sed et iaculis justo, ut bibendum lacus. Integer efficitur lobortis 
        neque, dictum luctus sapien cursus non. Sed volutpat est nec consectetur 
        mollis. Curabitur facilisis eros tincidunt tortor congue, vel varius 
        velit tincidunt. Cras sodales urna non metus tristique, non rhoncus ex 
        suscipit. Cras iaculis erat quis iaculis consectetur. Maecenas posuere 
        justo nunc. Duis ac orci dui. Quisque et maximus velit. Vivamus ut enim 
        elit. Aliquam aliquam metus quis dignissim vehicula. Ut varius purus eu 
        ipsum tristique elementum.
      </p>
      <p>
        Integer faucibus sodales urna sed malesuada. Sed nec molestie enim, quis 
        ultrices magna. Morbi elementum pharetra malesuada. Etiam molestie at lacus 
        sit amet scelerisque. Pellentesque a justo maximus, dapibus lacus a, placerat 
        velit. In gravida ex non nulla aliquam, non elementum metus porttitor. 
        Curabitur eget ex nec nibh pulvinar ultrices a eget enim. Proin in ultrices 
        risus. Pellentesque consectetur sit amet tellus et pharetra. Vestibulum vel 
        auctor ligula, eu dignissim ante. Vivamus vulputate lorem vel porta rhoncus. 
        Donec id ornare purus, at dictum lorem. Pellentesque interdum interdum accumsan. 
        Maecenas dapibus dui nisi. Donec placerat congue nisi, in condimentum leo 
        dictum non. Morbi augue elit, maximus in nibh in, porta faucibus nibh.
      </p>
    </Article>
  </>
)

export default DevotionalsPage