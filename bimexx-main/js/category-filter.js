document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    // If we have a category parameter
    if (category) {
      const categoryHeading = document.querySelector('.sectionTitle__title');
      if (categoryHeading) {
        categoryHeading.textContent = formatCategoryName(category) + ' Courses';
      }
      
      // Get all course cards
      const allCourses = document.querySelectorAll('.coursesCard');
      let visibleCount = 0;
      
      const categoryMappings = {
        'design-drafting': ['HVAC DESIGNING & DRAFTING', 'ELECTRICAL DESIGN AND DRAFTING', 'PLUMBING DESIGN AND DRAFTING', 'FIRE FIGHTING DESIGN AND DRAFTING', 'MEP DESIGN AND DRAFTING'],
        'bim': ['BIM', 'DIPLOMA IN BIM MEP', 'DIPLOMA IN BIM ARCHITECTURE', 'DIPLOMA IN BIM STURUTURAL', 'BIM Coordinator', 'BIM 360'],
        'master-bim': ['MASTER IN BIM', 'Master in Revit MEP Family Creation', 'Master in Revit Architecture Family Creation', 'Master in Revit Structural Family Creation'],
        'interior-design': ['INTERIOR DESIGN'],
        'mep-quantity-surveying': ['MEP QUANTITY SURVEYING'],
        'power-bi': ['Power BI', 'Excell In Construction'],
        'design-courses': ['AutoCAD', 'Revit Architecture', 'Revit MEP', 'Revit Structure', 'Autodesk Recap', '3ds Max', 'SketchUP', '4D/5D scheduling and Cost Estimations', 'Revit Dynamo']
      };
      
      // Get the course titles for the current category
      const relevantCourseTitles = categoryMappings[category] || [];
      
      allCourses.forEach(function(course) {
        const courseTitle = course.querySelector('.text-17.lh-15').textContent.trim();
        const shouldShow = relevantCourseTitles.some(title => 
          courseTitle.toUpperCase().includes(title.toUpperCase())
        );
        
        // Show or hide the course based on match
        if (shouldShow) {
          course.closest('.col-xl-3').style.display = 'block';
          visibleCount++;
        } else {
          course.closest('.col-xl-3').style.display = 'none';
        }
      });
      
      // Display message if no courses found
      if (visibleCount === 0) {
        const coursesContainer = document.querySelector('.row.y-gap-30');
        if (coursesContainer) {
          const noCoursesMessage = document.createElement('div');
          noCoursesMessage.className = 'col-12 text-center';
          noCoursesMessage.innerHTML = '<p class="text-18 lh-1">No courses found for this category. Please check back later.</p>';
          coursesContainer.appendChild(noCoursesMessage);
        }
      }
    }
    
    // Helper function to format category name
    function formatCategoryName(slug) {
      return slug.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
  });



  // email////////////////

